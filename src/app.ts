import express from "express";
import "reflect-metadata";
import handleErrors from "./middlewares/handleErrors.middlewares";
import ProjectsRouter from "./routes/projects.route";
import TechnologiesRouter from "./routes/technologies.route";

const app = express()
app.use(express.json())

app.use("/projects", ProjectsRouter)
app.use("/technologies", TechnologiesRouter)

app.use(handleErrors)

export default app;