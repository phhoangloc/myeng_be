import { Router } from "express";
import { userCreateBlog, userGetMyself, userUpdateBlog } from "../../controller/user";
export const userRouter = Router()


userRouter.get("/", userGetMyself)

userRouter.post("/blog", userCreateBlog)
userRouter.put("/blog", userUpdateBlog)

