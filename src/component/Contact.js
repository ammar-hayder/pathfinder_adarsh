import React from 'react'
import Form from '../component/Form'
import { FcCallback } from 'react-icons/fc';
import { FaWhatsapp } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Contact = () => {
    return (
        <>
            <div className='conte-main'>
                <div className='conte-con'>
                    <div className='conte-form'>
                        <Form />

                    </div>
                    <IconContext.Provider value={{ color: "#25D366", className: "global-class-name" }}>
                        <div className='social'>
                            <a href=' tel:918200940342'> <FcCallback />  958-03285</a>
                            <a href=' https://wa.me/918200940342'><FaWhatsapp /> 705832-05</a>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default Contact