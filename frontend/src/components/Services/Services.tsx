import React, {useEffect, useState} from 'react';
import {getAllServices} from "../../api/getAllServices";
import classes from "./Services.module.css";

const Services = () => {
    const [services, setServices] = useState<{ url: string, inf_s: boolean }[]>()

    async function getServices() {
        const res = await getAllServices()
        if (res.success) {
            // @ts-ignore
            setServices(res.data)
        }
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div className={classes.container}>
            {services

                ? <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Адрес</th>
                            <th>Доступ</th>
                        </tr>
                    </thead>

                    <tbody>
                        {services.map((service, index) =>
                        <tr key={index}>
                            <th>{service.url}</th>
                            <th><div className={service.inf_s ? classes.access : classes.notAccess}/></th>
                        </tr>)
                        }
                    </tbody>
                </table>
                : <p>Загрузка...</p>
            }
        </div>


    );
};

export default Services;