import {captchaSecret} from "../app";
import axios from "axios";

export async function verifyCaptchaService(value: string) {
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${value}`
    );
    return res.status === 200
}