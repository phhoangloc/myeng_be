import { Request, Response } from "express"
import { createWord, deleteWord, getWord, updateWord } from "../../responsiblity/word"
import { fail } from "assert"
import { createPath, deletePath, getPath, updatePath } from "../../responsiblity/path"
export const user = (req: Request, res: Response) => {
    res.json({
        msg: "hello user"
    })
}

export const userGetWord = async (req: Request, res: Response) => {
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
export const userCreateWord = async (req: Request, res: Response) => {
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
export const userUpdateWord = async (req: Request, res: Response) => {
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
export const userDeleteWord = async (req: Request, res: Response) => {
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
export const userGetPath = async (req: Request, res: Response) => {
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
export const userCreatePath = async (req: Request, res: Response) => {
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
export const userUpdatePath = async (req: Request, res: Response) => {
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
export const userDeletePath = async (req: Request, res: Response) => {
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