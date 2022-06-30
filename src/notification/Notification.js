import { createContext } from "react"
import { useState } from 'react'
import './Notification.css'

const Notification = ( { message, severity }) => {

    const notificationStyle = {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: '300px',
        height: 'auto',
        padding: '10px 20px',
        borderRadius: '5px',
    }

    const config = true ? {
        style: notificationStyle,
        className: `${severity === 'error' ? 'Error' : 'Success'}`
    } : {}

    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [ msgConfig, setMsgConfig] = useState({
        severity: 'success',
        message: ''
    })

    const setNotification = (sev, msg) => {
        setMsgConfig({ severity: sev, message: msg })
        setTimeout(() => {
            setMsgConfig({...msgConfig, message: ''})
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={ setNotification }>
          { msgConfig.message !== '' && <Notification message={msgConfig.message} severity={msgConfig.severity} />}
            { children }
        </NotificationContext.Provider>
    )
}

export default NotificationContext