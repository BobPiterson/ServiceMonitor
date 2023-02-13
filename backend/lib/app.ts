import express from 'express'
import {loggerMiddleware} from "./middlewares/loggerMiddleware";
import {verifyTokenMiddleware} from "./middlewares/verifyTokenMiddleware";
import {usersRouter} from "./routes/usersRouter";
import {sequelize} from "./sequelize";
import {createServer} from "http";
import {createSocket} from "./socket";
import {adminRouter} from "./routes/adminRouter";
import {servicesRouter} from "./routes/servicesRouter";

const app = express()
const server = createServer(app);
const port = process.env.PORT ?? 3001;
export const env = process.env.NODE_ENV || 'development';
const serverUrl = env === 'development' ? '/api' : ''
export const tokenKey = 'fqrt-fq2d-134g-f14j'
export const captchaSecret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// my middleware
app.use(loggerMiddleware)
app.use(verifyTokenMiddleware)

// routers
app.use(serverUrl + '/user', usersRouter)
app.use(serverUrl + '/admin', adminRouter)
app.use(serverUrl + '/services', servicesRouter)

// start
;(async () => {
    await sequelize.sync({force: false});
    createSocket(server)
    server.listen(port,
        () => console.info(`Server running on port ${port} in ${env} mode`)
    );
})();