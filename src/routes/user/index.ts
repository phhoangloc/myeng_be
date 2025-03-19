import { Router } from "express";
import { user, userCreatePathFive, userCreateWord, userDeletePathFive, userDeleteWord, userGetPathFive, userGetWord, userUpdatePathFive, userUpdateWord } from "../../controller/user";
export const userRouter = Router()

userRouter.get("/word", userGetWord)
userRouter.post("/word", userCreateWord)
userRouter.put("/word", userUpdateWord)
userRouter.delete("/word", userDeleteWord)

userRouter.get("/pathfive", userGetPathFive)
userRouter.post("/pathfive", userCreatePathFive)
userRouter.put("/pathfive", userUpdatePathFive)
userRouter.delete("/pathfive", userDeletePathFive)

userRouter.get("/", user)
