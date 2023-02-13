import {Permissions} from "../routes/routes";

export const CheckPermission = (routePermission: Permissions, permission: string): boolean => {
    return permission === 'admin' ||
        (routePermission === Permissions.test && permission === 'test') ||
        routePermission === Permissions.all ||
        (permission !== '' && routePermission === Permissions.registered)
}