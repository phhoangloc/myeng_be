import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const getPath = async (query: any) => {
    try {
        const result = await prisma.path.findMany({
            where: {
                archive: query.archive ? query.archive : undefined,
                id: query.id ? Number(query.id) : undefined
            },
            skip: query.skip ? Number(query.skip) : undefined,
            take: query.limit ? Number(query.limit) : undefined,
            orderBy: {
                createdAt: 'desc',
            },
        })
        return result
    } catch (error) {
        return error
    }

}
export const createPath = async (body: any) => {
    try {
        const result = await prisma.path.create({ data: body })
        return result
    } catch (error) {
        return error
    }

}
export const updatePath = async (body: any, id: number) => {
    try {
        const result = await prisma.path.update({ where: { id }, data: body })
        return result
    } catch (error) {
        return error

    }
}
export const deletePath = async (id: number) => {
    try {
        const result = await prisma.path.delete({ where: { id } })
        return result
    } catch (error) {
        return error
    }

}