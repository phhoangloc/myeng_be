import { checkToken, checkTokenAvailble } from "../ult/check"
import { GetOneUserRepository } from "../respository/user"
export const userService = async (token?: string) => {
    const func = async (token?: string) =>
        checkToken(token)
        || token && process.env.SECRETTOKEN && await checkTokenAvailble(token, process.env.SECRETTOKEN)
    const result = await func(token)
    return (result)
}
export const getOneUserService = async (id: number) => {
    const result = await GetOneUserRepository({ id: id })
    return ({
        success: true,
        data: result
    })
}