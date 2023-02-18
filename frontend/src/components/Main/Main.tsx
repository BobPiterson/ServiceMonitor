import React from 'react';
import classes from "./Main.module.css";
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.h}>
                Сайт для мониторинга
            </h1>
            <div className={classes.div1}>
                Данный сайт решает задачу автоматизированного выявления недоступности ресурсов, сервисов и приложений
                высших учебных заведений
            </div>
            <h1 className={classes.h2}>
                <a style={{color: "white"}} href='https://t.me/notice2023_bot'>Наш телеграм бот</a>
            </h1>
            <div className={classes.div1}>
                Для удобства создан телеграм бот, который вас оповестит, когда выбранный вами сервис станет доступным
            </div>
            <NavLink className={[classes.Link].join(' ')} to={routes.SignUp.path}>Зарегистрироваться</NavLink>
        </div>
    );
};

export default Main;