import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../api/getAllUsers";
import classes from "./AdminPanel.module.css";

const AdminPanel = () => {
    const [users, setUsers] = useState<any[]>()

    const getUsers = async () => {
        const res = await getAllUsers()
        if (res.success) {
            setUsers(res.data)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className={classes.list}>
            {users
                ?
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>login</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) =>
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.login}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <h1>Loading...</h1>
            }
        </div>
    );
};

export default AdminPanel;