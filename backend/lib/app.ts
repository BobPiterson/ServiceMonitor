import express from 'express'
import {loggerMiddleware} from "./middlewares/loggerMiddleware";
import {verifyTokenMiddleware} from "./middlewares/verifyTokenMiddleware";
import {usersRouter} from "./routes/usersRouter";
import {sequelize} from "./sequelize";
import {createServer} from "http";
import {createSocket} from "./socket";
import {adminRouter} from "./routes/adminRouter";

const app = express()
const server = createServer(app);
const port = process.env.PORT ?? 3001;
export const env = process.env.NODE_ENV || 'development';
const serverUrl = env === 'development' ? '/api' : ''
export const tokenKey = 'dkf4-l7bv-b2H6-5$m9'
export const captchaSecret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// my middleware
app.use(loggerMiddleware)
app.use(verifyTokenMiddleware)

// routers
app.use(serverUrl + '/user', usersRouter)
app.use(serverUrl + '/admin', adminRouter)

// start
;(async () => {
    await sequelize.sync({force: false});
    createSocket(server)
    server.listen(port,
        () => console.info(`Server running on port ${port} in ${env} mode`)
    );
})();