import React, {FC, KeyboardEvent, useRef, useState} from 'react';
import classes from "./Form.module.css";
import FormFieldProps from "../../../types/FormFieldProps";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import Captcha from "../../Captcha/Captcha";

interface FormProps {
    nameForm: string
    nameButton: string
    click: Function
    fields: FormFieldProps[]
    Error: string
    children?: React.ReactNode
    CaptchaField?: boolean;
}

const Form: FC<FormProps> = (
    {
        nameForm,
        nameButton,
        children,
        fields,
        click,
        Error,
        CaptchaField,
    }) => {

    const itemsRef = useRef<Array<HTMLInputElement | null>>([])
    const [captchaValue, setCaptchaValue] = useState('')

    // useEffect(() => {
    //    itemsRef.current = itemsRef.current.slice(0, fields.length);
    // }, [fields]);

    const formClick = () => {
        const values: { [key: typeof fields[number]['Name']]: string } = {}
        let NewError = ''

        for (let i = 0; i < fields.length; i++) {
            const value = itemsRef.current[i]!.value
            if (!value) {
                NewError = 'Заполните все поля!'
                itemsRef.current[i]!.classList.add(classes.fieldError)
                continue
            }

            if (fields[i].Validator) {
                if (!fields[i].Validator?.validate(value)) {
                    if (!NewError) {
                        NewError = fields[i].Validator!.error
                    }
                    itemsRef.current[i]!.classList.add(classes.fieldError)
                    continue
                }
            }
            itemsRef.current[i]!.classList.remove(classes.fieldError)
            values[fields[i].Name] = value
        }
        if (CaptchaField) {
            if (captchaValue) {
                values['Captcha'] = captchaValue
            } else {
                if (!NewError) {
                    NewError = 'Сделайте капчу!'
                }
            }
        }
        click(NewError, values)
    }

    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            formClick()
        }
    }

    return (
        <div className={classes.modalWindow}>
            <h1 className={classes.labelReg}>{nameForm}</h1>
            <hr className={classes.hr}/>
            {Error
                ? <h1 className={classes.error}>{Error}</h1>
                : <></>
            }
            {
                fields.map((field, i) =>
                    <div  key={i} >
                        <p className={classes.fieldName}>{field.Name} *</p>
                        <MyInput innerRef={el => itemsRef.current[i] = el}
                                 onKeyDown={keyDownHandler} {...field.Field}
                                 onClick={e => e.currentTarget.classList.remove(classes.fieldError)}/>
                    </div>)
            }
            {CaptchaField
                ? <Captcha setCaptchaValue={setCaptchaValue}/>
                : <></>
            }

            <MyButton onClick={formClick}>{nameButton}</MyButton>
            {children}
        </div>
    );
};

export default Form;