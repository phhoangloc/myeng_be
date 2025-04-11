import { PrismaClient } from "@prisma/client";
let instance: any
export const connect = async () => {
    if (instance) {
        return instance;
    } else {
        instance = new PrismaClient()
        return instance;
    }
}

