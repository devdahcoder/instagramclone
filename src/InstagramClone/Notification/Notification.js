import React from 'react'
import "./assets/styles/styles.css"
import NotificationItems from '../NotificationItems/NotificationItems';

const Notification = () => {
    return (
        <section className="notification-section">
            <div className="notification-display">
                <div className="notification-arrow">

                </div>

                <div className="notification-notify-container">
                    <div className="notification-notify-display">
                        <div className="notification-notify">
                            <div className="notification">
                                <NotificationItems />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notification
