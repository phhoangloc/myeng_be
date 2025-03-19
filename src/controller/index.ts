import { Request, Response } from "express"
export const api = (req: Request, res: Response) => {
    res.json({
        msg: "hello"
    })
}
