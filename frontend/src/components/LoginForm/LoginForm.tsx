import React, {useState} from 'react';
import Form from "../UI/Form/Form";
import FormFieldProps from "../../types/FormFieldProps";
import {loginApi} from "../../api/loginApi";
import validator from "validator";
import {SHA512} from "../../utils/crypto/utils/SHA512";
import {useLoginUser} from "../../hooks/useLoginUser";

const LoginForm = () => {
    const [Error, setError] = useState<string>('')
    const {LoginUser} = useLoginUser()

    const fields: FormFieldProps[] = [
        {
            Name: 'Login',
            Validator: {validate: validator.isAlpha, error: 'Incorrect Login'},
            Field: {
                placeholder: "Login",
            },
        },
        {
            Name: 'Password',
            Validator: {validate: validator.isAlphanumeric, error: 'Incorrect Password'},
            Field: {
                placeholder: "Password",
                type: 'password'
            },
        },
    ]

    interface ButtonClickParams {
        [key: typeof fields[number]['Name']]: string
    }

    const ButtonClick = async (Error: string, {Login, Password, Captcha}: ButtonClickParams) => {
        if (Error) {
            return setError(Error)
        }

        const hashPassword = await SHA512(Password)
        const res = await loginApi(Login, hashPassword, Captcha)
        if (res.success) {
            LoginUser(res.message, Login, Login)
        } else {
            setError(res.message)
        }
    }
    return (
        <Form nameForm="Авторизация" nameButton="Войти" fields={fields} click={ButtonClick} Error={Error}
              CaptchaField={true}></Form>
    );
};

export default LoginForm