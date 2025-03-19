import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const getPathFive = async (query: any) => {
    try {
        const result = await prisma.pathFive.findMany({
            where: {
                archive: query.archive ? query.archive : undefined,
                id: query.id ? Number(query.id) : undefined
            }
        })
        return result
    } catch (error) {
        return error
    }

}
export const createPathFive = async (body: any) => {
    try {
        const result = await prisma.pathFive.create({ data: body })
        return result
    } catch (error) {
        return error
    }

}
export const updatePathFive = async (body: any, id: number) => {
    try {
        const result = await prisma.pathFive.update({ where: { id }, data: body })
        return result
    } catch (error) {
        return error

    }
}
export const deletePathFive = async (id: number) => {
    try {
        const result = await prisma.pathFive.delete({ where: { id } })
        return result
    } catch (error) {
        return error
    }

}