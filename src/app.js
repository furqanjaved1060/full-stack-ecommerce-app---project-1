import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { connectDB } from "./config/mongoose-config.js";
await connectDB();
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { apiAdminRouter } from "./routes/api/api.admin.routes.js";
import { webAdminRouter } from "./routes/web/web.admin.routes.js";

// PORT
const PORT = process.env.PORT;

// SERVER
const app = express();

// EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("view engine", "ejs");

// STATIC FILES
app.use(express.static("./public"));

// PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// COOKIE PARSER
app.use(cookieParser());

// ROUTES - WEB - SERVES EJS
app.use("/admin", webAdminRouter);

// ROUTES - API - SERVES JSON
app.use("/api/admin", apiAdminRouter);
// app.use("/api", )

// LISTENER
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
