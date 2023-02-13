import React, {useEffect, useState} from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MyRoutes from "./components/MyRoutes/MyRoutes";
import {AuthContext} from "./context/AuthContext";
import {serverResponsibilityContext} from './context/serverResponsibilityContext';
import {AuthLocalStorageUser} from "./utils/AuthLocalStorageUser";
import {serverResponses} from "./types/ServerResponseEnum";

const App = () => {
    const [user, setUser] = useState({token: '', login: '', permission: ''})
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
        <AuthContext.Provider value={{user, setUser}}>
            <serverResponsibilityContext.Provider value={{status, setStatus}}>
                <GlobalStyles/>
                <Router>
                    <NavBar/>
                    <MyRoutes/>
                </Router>
            </serverResponsibilityContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
