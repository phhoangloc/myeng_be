import { GetManyUserRepository, UpdateUserRepository } from "../respository/user"
import { checkAdmin, checkToken, checkTokenAvailble } from "../ult/check"

export const adminService = async (token: string | undefined) => {
    const func = async (token: string | undefined) =>
        checkToken(token)
        || token && process.env.SECRETTOKEN && await checkTokenAvailble(token, process.env.SECRETTOKEN)
    const result = await func(token)
    const isAdmin = result && result.id && checkAdmin(result.id)
    return (isAdmin || result)
}
export const getManyUserService = async () => {
    const result = await GetManyUserRepository({})
    return ({
        success: true,
        data: result
    })
}
export const updateUserService = async (id: number, body: any) => {
    const result = await UpdateUserRepository(id, body)
    return ({
        success: true,
        data: result
    })
}