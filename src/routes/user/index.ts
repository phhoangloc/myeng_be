import { Router } from "express";
import { user, userCreatePath, userCreateWord, userDeletePath, userDeleteWord, userGetPath, userGetWord, userUpdatePath, userUpdateWord } from "../../controller/user";
export const userRouter = Router()

userRouter.get("/word", userGetWord)
userRouter.post("/word", userCreateWord)
userRouter.put("/word", userUpdateWord)
userRouter.delete("/word", userDeleteWord)

userRouter.get("/path", userGetPath)
userRouter.post("/path", userCreatePath)
userRouter.put("/path", userUpdatePath)
userRouter.delete("/path", userDeletePath)

userRouter.get("/", user)
