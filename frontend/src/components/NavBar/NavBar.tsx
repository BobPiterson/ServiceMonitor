import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../routes/routes";
import classes from './NavBar.module.css'
import {useCurrentPathName} from "../../hooks/useCurrentPathName";
import NavBarLinks from "./NavBarLinks";
import NavBarLogReg from "./NavBarLogReg";
import {AuthContext} from "../../context/AuthContext";
import NavBarAuthorized from "./NavBarAuthorized";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const NavBar = () => {
    const currentPath = useCurrentPathName()
    const {user} = useContext(AuthContext)

    return (
        <header className={classes.navBar}>
            <NavLink className={classes.logoRef} key={routes.Home.path} to={routes.Home.path}>
                <Logo mode={user.permission === 'admin'}/>
            </NavLink>
            <NavBarLinks currentPath={currentPath} permission={user.permission}/>
            <Search/>
            {user.login
                ? <NavBarAuthorized login={user.login}/>
                : <NavBarLogReg/>
            }
        </header>
    );
};

export default NavBar;