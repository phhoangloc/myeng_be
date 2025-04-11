import { Request, Response, NextFunction } from "express";
import { parse } from "cookie"
import { userService } from "../services/user.services";
interface CustomRequest extends Request {
    id?: number;
}

export const UserMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const cookies = req.headers.cookie;
    const token = cookies ? parse(cookies).token : null;
    const result = token && await userService(token)

    if (result && result.success) {
        req.id = result.id
        next()
    } else {
        res.json({
            success: false,
            msg: "Invalid credentials"
        })
    }
}