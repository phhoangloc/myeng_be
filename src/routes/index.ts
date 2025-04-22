import { Express } from "express"
import { userRouter } from "./user"
import { adminRouter } from "./admin"
import { AnonimousGetBlog, AnonimousGetPath, AnonimousGetWord, login, logout, signup } from "../controller"
import { AdminMiddleware } from "../middeware/admin.middleware"
import { UserMiddleware } from "../middeware/user.middleware"

export const route = (app: Express) => {
    app.use("/api/user", UserMiddleware, userRouter)
    app.use("/api/admin", AdminMiddleware, adminRouter)
    app.post("/api/signup", signup)
    app.post("/api/login", login)
    app.post("/api/logout", logout)

    app.get("/api/blog", AnonimousGetBlog)
    app.get("/api/path", AnonimousGetPath)
    app.get("/api/word", AnonimousGetWord)
}