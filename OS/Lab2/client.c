#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <stdbool.h>

#include "message.h"

#define DEVICE "/dev/example"

int main(int argc, char *argv[]) {
    int fd, ret_val;
    struct rw_monitor_info info;

    if (argc != 2) {
        printf("Usage: %s <PID>\n", argv[0]);
        return -1;
    }

    info.pid = atoi(argv[1]);

    fd = open(DEVICE, 0);
    if (fd < 0) {
        printf("Can't open device: %s\n", DEVICE);
        exit(-1);
    }

    info.read_bytes = 0;
    info.write_bytes = 0;
    info.is_exists = true;
    ret_val = ioctl(fd, RW_MONITOR_GET_INFO, &info);

    if (ret_val < 0) {
        printf("ioctl failed: %d\n", ret_val);
        close(fd);
        exit(-1);
    }

    if (!info.is_exists) {
        printf("task_struct with pid %d doesn't exists\n", info.pid);
        return 0;
    }
    printf("Data for pid %d\nRead bytes: %lu\nWrite bytes: %lu\n", info.pid, info.read_bytes, info.write_bytes);
    close(fd);
    return 0;
}