import { IncomingForm } from "formidable";
import { connect } from "../../ult/db";
import { Request } from "express";
import Client from "ssh2-sftp-client"
import { sftpConfig } from "../../ult/sftp";
import moment from "moment";

interface CustomRequest extends Request {
    id?: number;
}
export const GetPictureRepository = async (req: CustomRequest) => {
    const prisma = await connect()
    const pic = await prisma.pic.findMany({
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
    return pic
}

export const PostPictureRepository = async (req: CustomRequest) => {
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
                await prisma.pic.create({ data: { hostId: Number(req.id), name: moment(today).format("YYYY.MM.DD_hh-mm-ss") + "_" + uploadFile[0].originalFilename } })
            });
            client.end()
        }

    })
}
export const DeletePictureRepository = async (req: CustomRequest) => {
    const prisma = await connect()
    const user = await prisma.user.findFirst({ where: { id: Number(req.id) }, select: { position: true } })
    const pic = await prisma.pic.findUnique({ where: { id: Number(req.query.id) } })
    if (req.id === pic?.hostId || user?.position === "admin") {
        const client = new Client();
        await client.connect(sftpConfig).then(async () => {
            const result = pic && await client.delete(process.env.FTP_PATH + pic.name);
            if (result) {
                await prisma.pic.delete({ where: { id: Number(req.query.id) } })
            } else {
            }
            client.end()
        })
    } else {
        return ({
            msg: "this pic is not yours",
            success: false
        })

    }
}