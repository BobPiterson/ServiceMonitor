import React, {useContext, useRef} from 'react';
import classes from "./Search.module.css";
import SearchImage from "../UI/SearchImage/SearchImage";
import {serviceContext} from "../../context/serviceContext";

const Search = () => {
    const {setService} = useContext(serviceContext)
    const inputRef = useRef<HTMLInputElement>(null)

    function onClick() {
        if (inputRef.current && setService) {
            setService(inputRef.current.value);
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.inputDiv}>
                <span className={classes.span}><SearchImage/></span>
                <input ref={inputRef} className={classes.input} type="search" placeholder="Поиск сервисов"/>
            </div>
            <div className={classes.buttonDiv}>
                <button onClick={onClick} className={classes.button}>Поиск</button>
            </div>
        </div>
    );
};

export default Search;