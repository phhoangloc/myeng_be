import { Request, Response } from "express"
import { signUpService } from "../services/signup.service"
import { loginService } from "../services/login.service"
import { serialize } from "cookie"
import { getBlog } from "../respository/blog"
import { getPath } from "../respository/path"
export const signup = async (req: Request, res: Response) => {
    const body = req.body
    const result = await signUpService(body)
    res.json(result)
}
export const login = async (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password
    const result = await loginService(username, password)
    const token = "token" in result ? result.token : ""
    if (token) {
        res.setHeader('Set-Cookie', serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60,
            path: '/',
            sameSite: 'none',
        }));
        res.json({
            success: true,
            msg: "login success"
        })
    } else {
        res.json(result)
    }

}
export const logout = async (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true, // nếu bạn dùng HTTPS
        sameSite: 'strict' // hoặc 'lax' tùy theo setup
    });

    res.json({
        success: true,
        message: 'Logged out successfully'
    });
}

export const AnonimousGetBlog = async (req: Request, res: Response) => {
    const result: any = await getBlog(req.query)
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
export const AnonimousGetPath = async (req: Request, res: Response) => {
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