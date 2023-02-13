import {SetAuthHeaders} from "../utils/SetAuthHeaders";
import {SetLocalStorageUser} from "../utils/SetLocalStorageUser";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const useLoginUser = () => {
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate()

    return {
        LoginUser: (token: string, login: string, permission: string) => {
            setUser!({token, login, permission})
            SetAuthHeaders(token)
            SetLocalStorageUser(token)
            navigate('/')
        }
    }

}
