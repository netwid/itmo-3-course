import subprocess
import re
import matplotlib.pyplot as plt

def run_stress_ng_and_collect_metrics(test_type, parameter):
    """ Запускает stress-ng для заданного теста и параметра, собирает метрики. """
    command = f"sudo stress-ng --{test_type} {parameter} --metrics -t 5s"
    output = subprocess.run(command, shell=True, capture_output=True, text=True).stderr

    bogo_ops = re.findall(rf'{test_type}\s+\d+\s+\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+\s+(\d+\.\d+)', output)
    print(test_type, bogo_ops)
    if bogo_ops:
        return float(bogo_ops[0])
    return 0

# Параметры для теста
test_types = ["netlink-task", "netlink-proc"]
parameters = range(1, 6)  # Примерные значения параметров

# Словарь для хранения результатов
metrics = {}

# Запуск тестов и сбор метрик
for test_type in test_types:
    metrics[test_type] = []
    for param in parameters:
        bogo_ops_per_sec = run_stress_ng_and_collect_metrics(test_type, param)
        metrics[test_type].append(bogo_ops_per_sec)

plt.figure(figsize=(12, 6))

# График для netlink-task
plt.subplot(1, 2, 1)
plt.plot(parameters, metrics['netlink-task'], label='netlink-task bogo ops/s', marker='o')
plt.xlabel('Parameter N')
plt.ylabel('Bogo Ops/s')
plt.title('Bogo Ops/s for netlink-task')
plt.legend()
plt.grid(True)

# График для netlink-proc
plt.subplot(1, 2, 2)
plt.plot(parameters, metrics['netlink-proc'], label='netlink-proc bogo ops/s', marker='o')
plt.xlabel('Parameter N')
plt.ylabel('Bogo Ops/s')
plt.title('Bogo Ops/s for netlink-proc')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()