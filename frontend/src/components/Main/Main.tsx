import React from 'react';
import classes from "./Main.module.css";
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.h}>
                Сайт для мониторинга
            </h1>
            <div className={classes.div1}>
                We're npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for
                free, but our day job is building and selling useful tools for developers like you.
            </div>
            <h1 className={classes.h2}>
                Take your JavaScript development up a notch
            </h1>
            <div className={classes.div1}>
                Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience,
                with features like private packages.
            </div>
            <NavLink className={[classes.Link].join(' ')} to={routes.SignUp.path}>Sign up for free</NavLink>
        </div>
    );
};

export default Main;