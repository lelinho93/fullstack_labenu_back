import { Request, Response } from "express"
import { ImageBusiness } from "../business/ImageBusiness"

export class ImageController {

    async create(req: Request, res: Response) {
        const imageBusiness = new ImageBusiness

        try {
            const subtitle: string = req.body.subtitle
            const author: string = req.body.author
            const file: string = req.body.file
            const tags: string = req.body.tags
            const collection: string = req.body.collection

           
            await imageBusiness.create(subtitle, author, file, tags, collection)

            res.status(200).send("Imagem inserida!")

            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}