#define RW_MONITOR_IOCTL_MAGIC 'r'
#define RW_MONITOR_GET_INFO _IOR(RW_MONITOR_IOCTL_MAGIC, 1, struct rw_monitor_info)

struct rw_monitor_info {
    int pid;
    bool is_exists;
    unsigned long read_bytes;
    unsigned long write_bytes;
    unsigned long rchar;
    unsigned long wchar;
    unsigned long r_diff;
    unsigned long w_diff;
};
