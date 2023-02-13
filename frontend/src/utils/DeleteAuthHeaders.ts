import axios from "axios";

export const DeleteAuthHeaders = () => {
    delete axios.defaults.headers.common["Authorization"];
}
