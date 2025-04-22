import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const getPath = async (query: any) => {
    try {
        const result = await prisma.path.findMany({
            where: {
                archive: query.archive ? query.archive : undefined,
                id: query.id ? Number(query.id) : undefined
            },
            include: {
                audio: true
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
    const newbody = body
    newbody.audio = {
        connect: { id: body.audioId }
    }
    newbody.audioId = undefined
    try {
        const result = await prisma.path.create({ data: newbody })
        return result
    } catch (error) {
        return error
    }

}
export const updatePath = async (body: any, id: number) => {
    const newbody = body
    newbody.audio = {
        connect: { id: body.audioId }
    }
    newbody.audioId = undefined
    try {
        const result = await prisma.path.update({ where: { id }, data: newbody })
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