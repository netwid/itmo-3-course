#include <linux/init.h>
#include <linux/module.h>
#include <linux/fs.h>
#include <linux/cdev.h>
#include <linux/uaccess.h>
#include <linux/types.h>
#include <linux/delay.h>

#include "message.h"

#define DEVICE_NAME "example"

static int major;
static struct class *cl;

static long failed_get(unsigned long arg, struct rw_monitor_info *info) {
    info->is_exists = false;
    if (copy_to_user((struct rw_monitor_info *)arg, info, sizeof(struct rw_monitor_info))) {
        return -EFAULT;
    }
    return -ESRCH;
}

static long dev_ioctl(struct file *filep, unsigned int cmd, unsigned long arg) {
    struct rw_monitor_info info;
    struct task_struct *t;
    struct task_io_accounting start_io_acct, end_io_acct;

    switch (cmd) {
        case RW_MONITOR_GET_INFO:
            if (copy_from_user(&info, (struct rw_monitor_info *)arg, sizeof(struct rw_monitor_info))) {
                return -EFAULT;
            }

            t = get_pid_task(find_get_pid(info.pid), PIDTYPE_PID);
            if (t == NULL) {
                return failed_get(arg, &info);
            }

            start_io_acct = t->ioac;

            msleep(1000);

            t = get_pid_task(find_get_pid(info.pid), PIDTYPE_PID);
            if (t == NULL) {
                return failed_get(arg, &info);
            }

            end_io_acct = t->ioac;

            info.read_bytes = end_io_acct.read_bytes;
            info.write_bytes = end_io_acct.write_bytes;
            info.rchar = end_io_acct.rchar;
            info.wchar = end_io_acct.wchar;
            info.r_diff = end_io_acct.rchar - start_io_acct.rchar;
            info.w_diff = end_io_acct.wchar - start_io_acct.wchar;
        
            if (copy_to_user((struct rw_monitor_info *)arg, &info, sizeof(struct rw_monitor_info))) {
                return -EFAULT;
            }
            printk(KERN_INFO "Data has been sent to user\n");
            break;
        default:
            return -EINVAL;
    }

    return 0;
}

static struct file_operations fops = {
    .unlocked_ioctl = dev_ioctl,
};

static int __init example_init(void) {
    major = register_chrdev(0, DEVICE_NAME, &fops);

    if (major < 0) {
        printk(KERN_ALERT "Registering char device failed with %d\n", major);
        return major;
    }

    cl = class_create(THIS_MODULE, "chardrv");
    device_create(cl, NULL, MKDEV(major, 0), NULL, DEVICE_NAME);

    printk(KERN_INFO "Module loaded with device major number %d\n", major);
    return 0;
}

static void __exit example_exit(void) {
    device_destroy(cl, MKDEV(major, 0));
    class_destroy(cl);
    unregister_chrdev(major, DEVICE_NAME);
    printk(KERN_INFO "Module unloaded\n");
}

module_init(example_init);
module_exit(example_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("netwid");
MODULE_DESCRIPTION("A simple Linux module.");
MODULE_VERSION("0.1");
