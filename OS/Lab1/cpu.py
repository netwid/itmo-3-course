import subprocess
import matplotlib.pyplot as plt

def run_stress_ng(cpu_count, cpu_method):
    command = f"stress-ng --cpu {cpu_count} --cpu-method {cpu_method} --timeout 5 --metrics"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stderr

def parse_metrics(output):
    metrics = {}
    line = output.splitlines()[4]

    parts = line.split()
    print(parts)
    if len(parts) >= 12:
        metrics = {
            'bogoops': float(parts[4]),
            'real time (s)': float(parts[5]),
            'usr time (s)': float(parts[6]),
            'sys time (s)': float(parts[7]),
            'bogoops/s real time': float(parts[8]),
            'bogoops/s usr+sys time': float(parts[9]),
            'cpu%': float(parts[10]),
            'RSS max (kb)': float(parts[11])
        }
    return metrics

cpu_counts = range(1, 19)

metrics_float32 = {}
metrics_rand48 = {}

for cpu_count in cpu_counts:
    output_float32 = run_stress_ng(cpu_count, "float32")
    output_rand48 = run_stress_ng(cpu_count, "rand48")
    metrics_float32[cpu_count] = parse_metrics(output_float32)
    metrics_rand48[cpu_count] = parse_metrics(output_rand48)

metric_to_compare = 'bogoops/s real time'

plt.figure(figsize=(10, 6))
values_float32 = [metrics_float32[n].get(metric_to_compare, 0) for n in cpu_counts]
values_rand48 = [metrics_rand48[n].get(metric_to_compare, 0) for n in cpu_counts]
plt.plot(cpu_counts, values_float32, 'o-', label=f"float32 {metric_to_compare}")
plt.plot(cpu_counts, values_rand48, 'o-', label=f"rand48 {metric_to_compare}")

plt.xlabel("Количество CPU")
plt.ylabel(metric_to_compare)
plt.title(f"Сравнение {metric_to_compare} для float32 и rand48")
plt.xticks(cpu_counts)
plt.legend()
plt.show()