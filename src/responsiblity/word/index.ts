import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const getWord = async (query: any) => {
    try {
        const result = await prisma.word.findMany({
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
export const createWord = async (body: any) => {
    try {
        const result = await prisma.word.create({ data: body })
        return result
    } catch (error) {
        return error
    }

}
export const updateWord = async (body: any, id: number) => {
    try {
        const result = await prisma.word.update({ where: { id }, data: body })
        return result
    } catch (error) {
        return error

    }
}
export const deleteWord = async (id: number) => {
    try {
        const result = await prisma.word.delete({ where: { id } })
        return result
    } catch (error) {
        return error
    }

}