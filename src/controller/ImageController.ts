import { Request, Response } from "express"
import { ImageBusiness } from "../business/ImageBusiness"

export class ImageController {

    async create(req: Request, res: Response) {
        const imageBusiness = new ImageBusiness

        try {
            const token = req.headers.authorization as string
            const subtitle: string = req.body.subtitle
            const file: string = req.body.file
            const tags: string = req.body.tags
            const collection: string = req.body.collection

           
            await imageBusiness.create(subtitle, file, tags, collection, token)

            res.status(200).send("Imagem inserida!")

            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}