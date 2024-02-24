import subprocess
import matplotlib.pyplot as plt
import re
import threading
import time

def run_stress_ng(test_type, parameter, duration):
    command = f"sudo perf stat -e cs sudo stress-ng --{test_type} {parameter} --timeout {duration}s"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stderr

def parse_perf_output(output):
    lines = output.splitlines()
    cs = [line for line in lines if 'cs' in line][0]
    
    cs = int(re.sub(r'[^\d]', '', cs.split()[0]))

    return cs

metrics = {}


test_types = ["pathological --oom-pipe", "pipe-ops 100 --pipe"]
parameters = [1, 2, 3, 4]
duration = 5

metrics = [{}, {}]

for i, test_type in enumerate(test_types):
    for param in parameters:
        out = run_stress_ng(test_type, param, duration)
        metrics[i][param] = parse_perf_output(out)


plt.figure(figsize=(10, 6))
plt.plot(parameters, [metrics[0][param] for param in parameters], 'o-', label=test_types[0])
# plt.plot(parameters, [metrics[1][param] for param in parameters], 'o-', label=test_types[1])

plt.xlabel("N")
plt.ylabel("Context switches")
plt.title("Сравнение CS")
plt.legend()
plt.show()