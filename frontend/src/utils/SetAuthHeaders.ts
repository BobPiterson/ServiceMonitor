import axios from "axios";

export const SetAuthHeaders = (token: string) => {
    axios.defaults.headers.common["Authorization"] = token;
}

