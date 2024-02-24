import subprocess
import threading
import re
import matplotlib.pyplot as plt
import time

def run_stress_ng(test_type, N, duration):
    subprocess.run(f"sudo stress-ng --{test_type} {N} --timeout {duration}s", shell=True)

def run_iotop(metrics, test_type, parameter, duration):
    time.sleep(5)
    output = subprocess.run(f"sudo iotop -b -o -n {duration // 2}", shell=True, capture_output=True, text=True).stdout
    read_write_metrics = re.findall(r'Total DISK READ: (.+?) \| Total DISK WRITE: (.+?)\nCurrent DISK READ: (.+?) \| Current DISK WRITE: (.+?)\n', output)
    print(read_write_metrics)
    if read_write_metrics:
        total_read, total_write, current_read, current_write = read_write_metrics[-1]
        metrics[test_type, parameter] = (parse_metric(total_read), parse_metric(total_write),
                                         parse_metric(current_read), parse_metric(current_write))

def parse_metric(metric_str):
    number, unit = metric_str.split()
    number = float(number.replace(',', ''))
    if 'K' in unit:
        number *= 1024
    elif 'M' in unit:
        number *= 1024**2
    elif 'G' in unit:
        number *= 1024**3
    return number

metrics = {}

test_type = "io-uring"  # io-uring/ioprio
Ns = [1, 2, 4, 8]
duration = 10

for N in Ns:
    metrics[test_type, N] = [0, 0, 0, 0]
    stress_ng_thread = threading.Thread(target=run_stress_ng, args=(test_type, N, duration))
    iotop_thread = threading.Thread(target=run_iotop, args=(metrics, test_type, N, duration))
    
    stress_ng_thread.start()
    iotop_thread.start()

    stress_ng_thread.join()
    iotop_thread.join()

plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
plt.plot(Ns, [metrics[test_type, N][0] for N in Ns], label='Total Read')
# plt.plot(Ns, [metrics[test_type, N][1] for N in Ns], label='Total Write')
plt.xlabel('N')
plt.ylabel('Disk Usage (bytes/s)')
plt.title('Total Disk Usage for Different Parameters')
plt.legend()

# Current Disk Usage
plt.subplot(1, 2, 2)
plt.plot(Ns, [metrics[test_type, N][2] for N in Ns], label='Current Read')
plt.plot(Ns, [metrics[test_type, N][3] for N in Ns], label='Current Write')
plt.xlabel('N')
plt.ylabel('Disk Usage (bytes/s)')
plt.title('Current Disk Usage for Different Parameters')
plt.legend()

plt.tight_layout()
plt.show()
