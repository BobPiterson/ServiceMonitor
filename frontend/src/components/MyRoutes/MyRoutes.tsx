import React from 'react';
import {routes} from "../../routes/routes";
import {Navigate, Route, Routes} from "react-router-dom";
import PagePermission from "../PagePermission/PagePermission";

const MyRoutes = () => {
    const routesComponents: React.ReactElement[] = []
    for (const [name, route] of Object.entries(routes)) {
        routesComponents.push(<Route
            key={route.path}
            path={route.path}
            element={
                <PagePermission permission={route.permission}>
                    <route.element/>
                </PagePermission>
            }/>)
    }

    return (
        <Routes>
            {routesComponents}
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
};

export default MyRoutes;