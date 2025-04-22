import { Request, Response } from "express"
import { createWord, deleteWord, getWord, updateWord } from "../../respository/word"
import { createPath, deletePath, getPath, updatePath } from "../../respository/path"
import { GetManyUserRepository } from "../../respository/user"
import { createBlog, deleteBlog, getBlog, updateBlog } from "../../respository/blog"
import { DeleteFileRepository, GetFileRepository, PostFileRepository } from "../../respository/file"
interface CustomRequest extends Request {
    id?: number;
}
export const adminGetUser = async (req: Request, res: Response) => {
    const result: any = await GetManyUserRepository(req.query)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
// word
export const adminGetWord = async (req: Request, res: Response) => {
    const result: any = await getWord(req.query)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminCreateWord = async (req: Request, res: Response) => {
    const result: any = await createWord(req.body)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminUpdateWord = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const body = req.body
    const result: any = await updateWord(body, id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }

}
export const adminDeleteWord = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const result: any = await deleteWord(id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            msg: "delete successfully"
        })
    }
}
// path
export const adminGetPath = async (req: Request, res: Response) => {
    const result: any = await getPath(req.query)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminCreatePath = async (req: Request, res: Response) => {
    const result: any = await createPath(req.body)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminUpdatePath = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const body = req.body
    const result: any = await updatePath(body, id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }

}
export const adminDeletePath = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const result: any = await deletePath(id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            msg: "delete successfully"
        })
    }
}
// blog
export const adminGetBlog = async (req: Request, res: Response) => {
    const result: any = await getBlog(req.query)
    if (result.code || result.name) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminCreateBlog = async (req: CustomRequest, res: Response) => {
    const body = req.body
    body.host = { connect: { id: req.id } }
    const result: any = await createBlog(req.body)
    if (result.code || result.name) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminUpdateBlog = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const body = req.body
    const result: any = await updateBlog(body, id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }

}
export const adminDeleteBlog = async (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const result: any = await deleteBlog(id)
    if (result.code) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            msg: "delete successfully"
        })
    }
}
// file
export const adminGetFile = async (req: CustomRequest, res: Response) => {
    const result: any = await GetFileRepository(req)
    if (result.code || result.name) {
        res.json({
            success: false,
            msg: result
        })
    } else {
        res.json({
            success: true,
            data: result
        })
    }
}
export const adminCreateFile = async (req: CustomRequest, res: Response) => {
    try {
        const result = await PostFileRepository(req)
        console.log(result)
        res.json({
            success: true,
            msg: "your file is upload success",
            // file: result
        })

    } catch (error) {
        res.json({
            success: false,
            msg: "your file is upload fail"
        })
    }
}

export const adminDeleteFile = async (req: Request, res: Response) => {
    try {
        await DeleteFileRepository(req)
        res.json({
            success: true,
            msg: "your file is deleted success"
        })

    } catch (error) {
        res.json({
            success: false,
            msg: "your file is deleted fail"
        })
    }

}



