import React from 'react';
import classes from "./Forbidden.module.css";

const Forbidden = () => {
    return (
        <div className={classes.block}>
            <h1 className={classes.name}>Доступ запрещен!</h1>
        </div>
    );
};

export default Forbidden;