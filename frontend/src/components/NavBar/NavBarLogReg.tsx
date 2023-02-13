import React from 'react';
import classes from "./NavBar.module.css";
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";

const NavBarLogReg = () => {
    return (
        <div className={classes.textEnd}>
            <NavLink
                className={[classes.login, classes.navLink, classes.textButton].join(' ')}
                to={routes.Login.path}
            >{routes.Login.name}</NavLink>
            <NavLink
                className={[classes.register, classes.navLink, classes.textButton].join(' ')}
                to={routes.SignUp.path}
            >{routes.SignUp.name}</NavLink>
        </div>
    );
};

export default NavBarLogReg;