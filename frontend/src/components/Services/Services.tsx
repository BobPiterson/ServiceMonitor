import React, {useContext, useEffect, useState} from 'react';
import {getAllServices} from "../../api/getAllServices";
import classes from "./Services.module.css";
import {serviceContext} from "../../context/serviceContext";

type ColumnType = { url: string, inf_s: boolean }
type ColumnsType = readonly [ColumnType, ColumnType, ColumnType]

const Services = () => {
    const [services, setServices] = useState<ColumnType[]>([])
    const [columns, setColumns] = useState<ColumnsType[]>([])
    const {service} = useContext(serviceContext)

    async function getServices() {
        const res = await getAllServices()
        if (res.success) {
            // @ts-ignore
            setServices(res.data)
        }
    }

    useEffect(() => {
        if (!service) return
        setServices((services) => [...services].sort((a, b) => {
                if (a.url.includes(service) && !b.url.includes(service)) {
                    return -1;
                }
                if (!a.url.includes(service) && b.url.includes(service)) {
                    return 1;
                }
                return 0;
            })
        )
    }, [service])

    useEffect(() => {
        const newColumns: ColumnsType[] = []
        for (let i = 0; i < services.length / 3; i++) {
            newColumns.push([services[i * 3], services[i * 3 + 1], services[i * 3 + 2]])
        }
        setColumns(newColumns);
    }, [services])

    useEffect(() => {
        getServices()
    }, [])

    return (
        <div className={classes.container}>
            <h1 className={classes.name}>Адрес</h1>
            <p className={classes.p}>
                <span style={{color: "white", fontWeight: 'bold'}}>Белым </span>
                цветом обозначены доступные сервисы,
                <span style={{color: "yellow", fontWeight: 'bold'}}> желтым</span> - недоступные
            </p>
            {columns
                ? <table className={classes.table}>
                    <tbody>
                    {columns.map((column, index1) =>
                        <tr key={index1}>
                            {column.map((service, index2) =>
                                service ?
                                    <th key={index1 * 3 + index2}
                                        className={service.inf_s ? classes.access : classes.notAccess}
                                    >{service.url}</th>

                                    : <th key={index1 * 3 + index2}></th>
                            )}
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