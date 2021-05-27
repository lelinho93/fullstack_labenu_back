import { Request, Response } from "express"
import { GetImagesBusiness } from "../business/GetImagesBusiness"

export class GetImagesController {

    async create(req: Request, res: Response) {
        const getImagesBusiness = new GetImagesBusiness()

        try {

            const token = req.headers.authorization as string
            const result = await getImagesBusiness.create(token)

            res.status(200).send(result)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}