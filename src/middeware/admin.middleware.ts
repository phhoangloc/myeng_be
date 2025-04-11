import { Request, Response, NextFunction } from "express";
import { parse } from "cookie"
import { adminService } from "../services/admin.services";
interface CustomRequest extends Request {
    id?: number;
}

export const AdminMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const cookies = req.headers.cookie;
    const token = cookies ? parse(cookies).token : null;
    const result = token && await adminService(token)
    if (result && result.success) {
        req.id = result.id
        next()
    } else {
        res.json(result)
    }
}