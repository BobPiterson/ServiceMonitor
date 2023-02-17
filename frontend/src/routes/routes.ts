import HomePage from "../pages/HomePage";
import {FC} from "react";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PanelPage from "../pages/PanelPage";
import TestPage from "../pages/TestPage";
import ServicesPage from "../pages/ServicesPage";

export enum Permissions {
    all,
    registered,
    admin,
    test,
}

export interface IOneRoute {
    path: string
    name: string
    element: FC
    permission: Permissions
    show: boolean
}

interface IRoutes {
    [key: string]: IOneRoute;
}

export const routes: IRoutes = {
    Home: {path: "/", element: HomePage, name: 'Home', permission: Permissions.all, show: true},
    Login: {path: "/login", element: LoginPage, name: 'Sign In', permission: Permissions.all, show: false},
    SignUp: {path: "/register", element: RegisterPage, name: 'Sign Up', permission: Permissions.all, show: false},
    Panel: {path: "/panel", element: PanelPage, name: 'Admin panel', permission: Permissions.admin, show: true},
    Test: {path: "/test", element: TestPage, name: 'Test', permission: Permissions.test, show: true},
    Services: {path: "/services", element: ServicesPage, name: 'Services', permission: Permissions.registered, show: true},
}
