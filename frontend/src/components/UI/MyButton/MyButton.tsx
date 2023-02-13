import React, {ButtonHTMLAttributes, FC} from 'react';
import classes from "./MyButton.module.css";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classButton? : string
}

const MyButton: FC<MyButtonProps> = ({classButton, ...props}) => {
    return (
        <button className={[classes.button, classButton].join(' ')} {...props}/>
    );
};

export default MyButton;