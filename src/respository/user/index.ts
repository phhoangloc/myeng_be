
import { QueryType } from "../../type/query";
import { genSaltSync, hashSync } from "bcryptjs";
import { connect } from "../../ult/db";

export const GetOneUserRepository = async (body: QueryType) => {
    const prisma = await connect()
    const user = await prisma.user.findFirst({
        where: {
            id: body.id ? body.id : undefined,
            username: body.username ? body.username : undefined,
            email: body.email ? body.email : undefined
        },
        select: {
            id: true,
            archive: true,
            username: true,
            email: true,
            position: true,
            active: true,
            createdAt: true,
            avata: {
                select: {
                    name: true
                }
            }
        }
    })
    return user
}
export const GetOneUserRepositoryForLogin = async (body: QueryType) => {
    const prisma = await connect()
    const user = await prisma.user.findFirst({
        where: {
            username: body.username,
        },
        select: {
            id: true,
            username: true,
            active: true,
            password: true,
        }
    })
    return user
}
export const GetManyUserRepository = async (body: QueryType) => {
    const prisma = await connect()
    const users = await prisma.user.findMany({
        where: {
            id: Number(body.id) ? Number(body.id) : undefined,
            username: body.username ? body.username : undefined,
            email: body.email ? body.email : undefined
        },
        select: {
            id: true,
            archive: true,
            username: true,
            email: true,
            position: true,
            active: true,
            createdAt: true,
            avata: {
                select: {
                    name: true
                }
            }
        }
    })
    return users
}
export const CreateUserRepository = async (body: any) => {
    const prisma = await connect()

    const salt = genSaltSync(10);
    const mahoa_password = body.password && hashSync(body.password.toString(), salt);
    body.password = mahoa_password
    const users = await prisma.user.create({ data: body })
    return users
}
export const UpdateUserRepository = async (id: number, body: any) => {
    const prisma = await connect()

    const users = await prisma.user.update({ where: { id }, data: body })
    return users
}
export const DeleteUserRepository = async (id: number) => {
    const prisma = await connect()

    const users = await prisma.user.delete({ where: { id } })
    return users
}