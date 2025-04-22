import { Router } from "express";
import { adminCreatePath, adminCreateWord, adminDeletePath, adminDeleteWord, adminGetPath, adminGetWord, adminUpdatePath, adminUpdateWord, adminGetUser, adminGetBlog, adminCreateBlog, adminUpdateBlog, adminDeleteBlog, adminCreateFile, adminDeleteFile, adminGetFile, } from "../../controller/admin";
export const adminRouter = Router()

adminRouter.get("/word", adminGetWord)
adminRouter.post("/word", adminCreateWord)
adminRouter.put("/word", adminUpdateWord)
adminRouter.delete("/word", adminDeleteWord)

adminRouter.get("/path", adminGetPath)
adminRouter.post("/path", adminCreatePath)
adminRouter.put("/path", adminUpdatePath)
adminRouter.delete("/path", adminDeletePath)

adminRouter.get("/blog", adminGetBlog)
adminRouter.post("/blog", adminCreateBlog)
adminRouter.put("/blog", adminUpdateBlog)
adminRouter.delete("/blog", adminDeleteBlog)

adminRouter.get("/file", adminGetFile)
adminRouter.post("/file", adminCreateFile)
adminRouter.delete("/file", adminDeleteFile)

adminRouter.get("/", adminGetUser)
