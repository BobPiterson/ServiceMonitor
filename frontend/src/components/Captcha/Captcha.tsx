import React, {Dispatch, FC} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {CaptchaKey} from "../../utils/ProjectConstants";
import classes from "./Captcha.module.css";

interface CaptchaProps {
    setCaptchaValue: Dispatch<string>
}

const Captcha: FC<CaptchaProps> = ({setCaptchaValue}) => {
    async function onChange(value: string | null) {
        setCaptchaValue(value as string)
    }

    return (
        <ReCAPTCHA className={classes.captcha} sitekey={CaptchaKey} onChange={onChange}/>
    );
};

export default Captcha;