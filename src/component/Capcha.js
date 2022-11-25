import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Capcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <>
            <ReCAPTCHA
                sitekey="6LceBjIjAAAAAEtV1YryoK4pJQXkO2RDEiTe_sRr"
                onChange={onChange}
            />,

        </>
    )
}

export default Capcha
