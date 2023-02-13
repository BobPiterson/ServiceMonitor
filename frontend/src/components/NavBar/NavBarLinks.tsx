import React, {FC} from 'react';
import {IOneRoute, routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css";
import {CheckPermission} from "../../utils/CheckPermission";

interface NavProps {
    currentPath: string;
    permission: string
}

const NavBarLinks: FC<NavProps> = ({currentPath, permission}) => {
    const navLinkComponents: React.ReactElement[] = []

    const getNavlinkComponent = (route: IOneRoute) =>
        <li key={route.path} className={classes.navLinkLi}>
            <NavLink
                className={route.path === currentPath ? [classes.navLink, classes.CurrentNavLink].join(' ') :
                    [classes.navLink, classes.leftNavs].join(' ')}
                to={route.path}
            >{route.name}</NavLink>
        </li>


    for (const route of Object.values(routes)) {
        if (!route.show) continue

        if (CheckPermission(route.permission, permission)) {
            navLinkComponents.push(getNavlinkComponent(route))
        }
    }

    return (
        <ul className={classes.navUl}>
            {navLinkComponents}
        </ul>
    );
};

export default NavBarLinks;