import subprocess
import matplotlib.pyplot as plt
import re
import threading
import time

def run_stress_ng(test_type, parameter, duration):
    subprocess.run(f"sudo stress-ng --{test_type} {parameter} --timeout {duration}s", shell=True)

def run_vmstat(metrics, test_type, parameter, duration):
    time.sleep(5)
    output = subprocess.run(f"vmstat 1 {duration}", shell=True, capture_output=True, text=True).stdout
    free_memory_metrics = re.findall(r'\d+\s+\d+\s+\d+\s+(\d+)', output)
    if free_memory_metrics:
        avg_free_memory = sum(map(int, free_memory_metrics)) / len(free_memory_metrics)
        metrics[test_type, parameter] = avg_free_memory

metrics = {}


test_types = ["memrate", "mmaphuge-mmaps 1000 --mmaphuge"]
parameters = [1, 2, 4, 8]
duration = 10


for test_type in test_types:
    for param in parameters:
        metrics[test_type, param] = 0 
        stress_ng_thread = threading.Thread(target=run_stress_ng, args=(test_type, param, duration))
        vmstat_thread = threading.Thread(target=run_vmstat, args=(metrics, test_type, param, duration))
        
        stress_ng_thread.start()
        vmstat_thread.start()

        stress_ng_thread.join()
        vmstat_thread.join()


plt.figure(figsize=(12, 6))

for test_type in test_types:
    plt.plot(parameters, [metrics[test_type, param] for param in parameters], label=f'{test_type}')

plt.xlabel('N')
plt.ylabel('Average Free Memory (KB)')
plt.title('Average Free Memory for Different Parameters')
plt.legend()

plt.tight_layout()
plt.show()
