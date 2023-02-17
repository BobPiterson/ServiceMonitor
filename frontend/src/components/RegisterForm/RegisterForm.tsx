import React, {useState} from 'react';
import classes from "./RegisterForm.module.css";
import Form from "../UI/Form/Form";
import FormFieldProps from "../../types/FormFieldProps";
import {registerApi} from "../../api/registerApi";
import validator from "validator";
import {SHA512} from "../../utils/crypto/utils/SHA512";
import {useLoginUser} from "../../hooks/useLoginUser";

const RegisterForm = () => {
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
            Name: 'Email',
            Validator: {validate: validator.isEmail, error: 'Incorrect Email'},
            Field: {
                placeholder: "Email",
                type: 'email'
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
        {
            Name: 'RepeatPassword',
            Field: {
                placeholder: "Repeat password",
                type: 'password'
            },
        }
    ]

    interface ButtonClickParams {
        [key: typeof fields[number]['Name']]: string
    }

    const ButtonClick = async (Error: string, {Login, Password, Email, RepeatPassword, Captcha}: ButtonClickParams) => {
        if (Error) {
            return setError(Error)
        }

        if (Password !== RepeatPassword) {
            return setError('Пароли не совпадают!')
        }

        const hashPassword = await SHA512(Password)
        const res = await registerApi(Login, hashPassword, Email, Captcha)
        if (res.success) {
            LoginUser(res.message, Login, Login)
        } else {
            setError(res.message)
        }
    }

    return (
        <Form nameForm="Регистрация" nameButton="Создать аккаунт" fields={fields} click={ButtonClick} Error={Error}
              CaptchaField={false}>
            <p className={classes.p}>Регистрируясь, вы соглашаетесь с <span className={classes.span}>Правилами использования</span>
            </p>
        </Form>
    );
};

export default RegisterForm;