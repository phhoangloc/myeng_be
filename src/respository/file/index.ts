import { IncomingForm } from "formidable";
import { connect } from "../../ult/db";
import { Request } from "express";
import Client from "ssh2-sftp-client"
import { sftpConfig } from "../../ult/sftp";
import moment from "moment";

interface CustomRequest extends Request {
    id?: number;
}
export const GetFileRepository = async (req: CustomRequest) => {
    const prisma = await connect()
    const file = await prisma.file.findMany({
        where: {
            id: req.query.id ? Number(req.query.id) : undefined,
            hostId: req.id ? Number(req.id) : undefined
        },
        include: {
            host: {
                select: {
                    username: true
                }
            }
        },
        skip: req.query.skip ? Number(req.query.skip) : undefined,
        take: req.query.limit ? Number(req.query.limit) : undefined,
        orderBy: {
            createdAt: 'desc',
        },
    })
    return file
}

export const PostFileRepository = async (req: CustomRequest) => {
    const prisma = await connect()
    const form = new IncomingForm();
    const today = new Date();
    form.parse(req, async (err: Error, fields: any, files: any) => {
        if (err) {
            throw err
        } else {
            const uploadFile = files && files.file;
            const client = new Client();

            await client.connect(sftpConfig).then(async () => {
                await client.put(uploadFile[0].filepath, process.env.FTP_PATH + moment(today).format("YYYY.MM.DD_hh-mm-ss") + "_" + uploadFile[0].originalFilename)
                await prisma.file.create({ data: { hostId: Number(req.id), name: moment(today).format("YYYY.MM.DD_hh-mm-ss") + "_" + uploadFile[0].originalFilename } })
            });
            client.end()
        }
    })
}
export const DeleteFileRepository = async (req: CustomRequest) => {
    const prisma = await connect()
    const user = await prisma.user.findFirst({ where: { id: Number(req.id) }, select: { position: true } })
    const file = await prisma.file.findUnique({ where: { id: Number(req.query.id) } })
    if (req.id === file?.hostId || user?.position === "admin") {
        const client = new Client();
        await client.connect(sftpConfig).then(async () => {
            const result = file && await client.delete(process.env.FTP_PATH + file.name);
            if (result) {
                await prisma.file.delete({ where: { id: Number(req.query.id) } })
            } else {
            }
            client.end()
        })
    } else {
        return ({
            msg: "this file is not yours",
            success: false
        })

    }
}