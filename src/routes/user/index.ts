import { Router } from "express";
import { userCreateBlog, userDeleteBlog, userGetBlog, userGetMyself, userUpdateBlog } from "../../controller/user";
export const userRouter = Router()


userRouter.get("/", userGetMyself)
userRouter.get("/blog", userGetBlog)
userRouter.post("/blog", userCreateBlog)
userRouter.put("/blog", userUpdateBlog)
userRouter.delete("/delete", userDeleteBlog)

