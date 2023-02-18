import React, {useEffect, useState} from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MyRoutes from "./components/MyRoutes/MyRoutes";
import {AuthContext} from "./context/AuthContext";
import {serverResponsibilityContext} from './context/serverResponsibilityContext';
import {AuthLocalStorageUser} from "./utils/AuthLocalStorageUser";
import {serverResponses} from "./types/ServerResponseEnum";
import {serviceContext} from './context/serviceContext';

const App = () => {
    const [user, setUser] = useState({token: '', login: '', permission: ''})
    const [service, setService] = useState('')
    const [status, setStatus] = useState(true)

    const setLocalUser = async () => {
        const res = await AuthLocalStorageUser()
        if (res.status === serverResponses.success) {
            setUser(res.user)
        } else if (res.status === serverResponses.unknownError) {
            setStatus(false)
        }
    }

    useEffect(() => {
        setLocalUser()
    }, [])

    return (
        <serviceContext.Provider value={{service, setService}}>
            <AuthContext.Provider value={{user, setUser}}>
                <serverResponsibilityContext.Provider value={{status, setStatus}}>
                    <GlobalStyles/>
                    <Router>
                        <NavBar/>
                        <MyRoutes/>
                    </Router>
                </serverResponsibilityContext.Provider>
            </AuthContext.Provider>
        </serviceContext.Provider>
    );
};

export default App;
