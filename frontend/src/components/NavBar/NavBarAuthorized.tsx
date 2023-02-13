import React, {FC, useContext} from 'react';
import classes from "./NavBar.module.css";
import {DeleteAuthHeaders} from "../../utils/DeleteAuthHeaders";
import {AuthContext} from "../../context/AuthContext";
import {RemoveLocalStorageUser} from "../../utils/RemoveLocalStorageUser";

interface NavBarAuthorizedProps {
    login: string
}

const NavBarAuthorized: FC<NavBarAuthorizedProps> = ({login}) => {
    const {setUser} = useContext(AuthContext)

    const logout = () => {
        setUser!({login: "", permission: "", token: ""})
        DeleteAuthHeaders()
        RemoveLocalStorageUser()
    }

    return (
        <div className={classes.textEnd} onClick={logout}>
            <p className={[classes.login, classes.authorizedText, classes.textButton].join(' ')}>{login}</p>
        </div>
    );
};

export default NavBarAuthorized;