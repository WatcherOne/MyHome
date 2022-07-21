/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2022-07-20 16:51:20
 * Description: 通知用于向用户显示桌面通知, 仅在支持的完全上下文可用
*************************************************************/

export function notify (message) {
    if (!('Notifycation' in window)) {
        alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
        new Notification(message)
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                new Notification(message)
            }
        })
    }
}
