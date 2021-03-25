import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { UserController } from './controller/UserController'
import { ImageController } from './controller/ImageController'
import { GetImagesController } from './controller/GetImagesController'
import { GetSpecificItemController } from './controller/GetSpecificItemController'


dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const cors = require("cors")

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

app.use(express.json())


app.post("/user/signup", new UserController().create)
app.post("/user/login", new UserController().login)

app.post("/image", new ImageController().create)
app.get("/getimages", new GetImagesController().create)
app.get("/getitem/:id", new GetSpecificItemController().create)





const server = app.listen(process.env.PORT || 3306, () => {
    if(server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log('Failure upon starting server.')
    }
})