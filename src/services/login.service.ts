
import { GetOneUserRepositoryForLogin } from "../respository/user";
import { checkActive, validateUser } from "../ult/check";
import { generateToken } from "../ult/jwt";
export const loginService = async (username: string, password: string) => {
    const user = await GetOneUserRepositoryForLogin({ username });
    if (user) {
        return checkActive(user.active)
            || await validateUser(password, user.password)
            || await generateToken(user.id, process.env.SECRETTOKEN)
    } else {
        return ({
            success: false,
            msg: "username or password is not correct!"
        })
    }
}