import React from 'react';
import classes from "./ServerError.module.css";

const ServerError = () => {
    return (
        <div className={classes.block}>
            <h1 className={classes.name}>Сервер не отвечает!
                <p>Подождите некоторое время и перезагрузите страницу!</p>
            </h1>
        </div>
    );
};

export default ServerError;