import subprocess
import matplotlib.pyplot as plt
import numpy as np
import re

def run_perf_stat(cache_fence, l1cache_size):
    cache_fence_option = f"--cache-fence {cache_fence}" if cache_fence else ""
    command = f"sudo perf stat -e cache-misses -e cache-references stress-ng --cpu 16 {cache_fence_option} --l1cache-size {l1cache_size} -t 5s"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stderr

def parse_perf_output(output):
    lines = output.splitlines()
    cache_misses_line = [line for line in lines if 'cache-misses' in line][0]
    cache_refs_line = [line for line in lines if 'cache-references' in line][0]
    
    cache_misses = int(re.sub(r'[^\d]', '', cache_misses_line.split()[0]))
    cache_refs = int(re.sub(r'[^\d]', '', cache_refs_line.split()[0]))

    return 100 * cache_misses / cache_refs if cache_refs != 0 else 0

l1cache_sizes = [128, 256, 512, 1 * 1024, 4 * 1024, 16 * 1024, 64 * 1024]

cache_miss_rates_without_fence = {}
cache_miss_rates_with_fence = {}

for size in l1cache_sizes:
    output_without_fence = run_perf_stat(False, size)
    cache_miss_rates_without_fence[size] = parse_perf_output(output_without_fence)

    output_with_fence = run_perf_stat(True, size)
    cache_miss_rates_with_fence[size] = parse_perf_output(output_with_fence)

plt.figure(figsize=(10, 6))
plt.plot(l1cache_sizes, [cache_miss_rates_without_fence[size] for size in l1cache_sizes], 'o-', label='Без cache-fence')
plt.plot(l1cache_sizes, [cache_miss_rates_with_fence[size] for size in l1cache_sizes], 'o-', label='С cache-fence')

plt.xlabel("Размер L1 кэша (КБ)")
plt.ylabel("Процент промахов кэша")
plt.title("Сравнение процента промахов кэша с и без cache-fence")
plt.legend()
plt.show()