import {InputHTMLAttributes} from "react";

export default interface FormFieldProps {
    Name: string
    Validator?: { validate:(text: string) => boolean, error: string}
    Field: InputHTMLAttributes<HTMLInputElement>
}
