import { Request, Response } from "express"
import { GetOneUserRepository } from "../../respository/user"
import { createBlog, deleteBlog, getBlog, updateBlog } from "../../respository/blog";
interface CustomRequest extends Request {
    id?: number;
}
export const userGetMyself = async (req: CustomRequest, res: Response) => {
    const result: any = await GetOneUserRepository({ id: req.id })
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
export const userGetBlog = async (req: Request, res: Response) => {
    const result: any = await getBlog(req.query)
    console.log(result)
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
export const userCreateBlog = async (req: CustomRequest, res: Response) => {
    const body = req.body
    body.host = { connect: { id: req.id } }
    const result: any = await createBlog(body)
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
export const userUpdateBlog = async (req: CustomRequest, res: Response) => {
    const id = Number(req.query.id)
    const body = req.body
    const blog: any = await getBlog({ id })
    const _hostId = blog[0].hostId
    if (_hostId === req.id) {
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
    } else {
        res.json({
            success: false,
            msg: "this blog is not yours"
        })
    }


}
export const userDeleteBlog = async (req: CustomRequest, res: Response) => {
    const id = Number(req.query.id)
    const body = req.body
    const blog: any = await getBlog({ id })
    const _hostId = blog.hostId
    if (_hostId === req.id) {
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
    } else {
        res.json({
            success: false,
            msg: "this blog is not yours"
        })
    }
}