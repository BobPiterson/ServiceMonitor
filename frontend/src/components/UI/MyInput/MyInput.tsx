import React, {FC, ForwardedRef, InputHTMLAttributes} from 'react';
import classes from "./MyInput.module.css";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    innerRef: ForwardedRef<HTMLInputElement>;
}

const MyInput: FC<MyInputProps> = ({innerRef, ...props}) => {
    return (
        <input ref={innerRef} className={classes.input} {...props}/>
    );
};

export default MyInput;