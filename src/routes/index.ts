import { Express } from "express"
import { api } from "../controller"
import { userRouter } from "./user"

export const route = (app: Express) => {
    app.use("/api/user", userRouter)
    app.use("/api", api)
}