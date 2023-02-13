import React, {FC, useContext} from 'react';
import {Permissions} from "../../routes/routes";
import {AuthContext} from "../../context/AuthContext";
import {CheckPermission} from "../../utils/CheckPermission";
import Forbidden from "../../pages/ErrorPages/Forbidden/Forbidden";
import {serverResponsibilityContext} from "../../context/serverResponsibilityContext";
import ServerError from "../../pages/ErrorPages/ServerError/ServerError";

interface PagePermissionProps {
    permission: Permissions
    children?: React.ReactNode
}

const PagePermission: FC<PagePermissionProps> = ({permission, children}) => {
    const {user} = useContext(AuthContext)
    const {status} = useContext(serverResponsibilityContext)

    return (
        <>
            {status
                ?
                CheckPermission(permission, user.permission)
                    ? children
                    : <Forbidden/>
                :
                <ServerError/>
            }
        </>
    );
};

export default PagePermission;