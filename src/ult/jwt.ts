import { sign } from "jsonwebtoken";

export const generateToken = async (id: number, secret?: string) => {
    const payload = { id };
    if (secret) {
        return ({
            success: true,
            msg: "Login Success",
            token: sign(payload, secret, { expiresIn: '2h' })
        })
    } else {
        return ({
            success: false,
            token: "your secret token hasn't been setted"
        })
    }

};
