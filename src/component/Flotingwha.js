import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const Flotingwha = () => {
    return (
        <>
            <div className="App">
                <FloatingWhatsApp
                    phoneNumber="123456789"
                    accountName="Adarsh"
                    allowEsc
                    allowClickAway
                    notification
                    notificationSound
                />
            </div>
        </>
    )
}

export default Flotingwha