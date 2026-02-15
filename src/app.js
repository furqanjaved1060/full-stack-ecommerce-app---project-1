import express from "express"
import dotenv from "dotenv"
dotenv.config({path: ".env"})
import cookieParser from "cookie-parser"

// PORT
const PORT = process.env.PORT

// SERVER
const app = express()

// EJS
app.use("view engine", "ejs")

// STATIC FILES
app.set(express.static("../public"))

// PARSERS
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// COOKIE PARSER
app.use(cookieParser())

// ROUTES - WEB - SERVES EJS

// ROUTES - API - SERVES JSON

// LISTENER
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))