import { Request, Response } from "express"
import { GetSpecificItemBusiness } from "../business/GetSpecificItemBusiness"

export class GetSpecificItemController {

    async create(req: Request, res: Response) {
        const getSpecificItemBusiness = new GetSpecificItemBusiness()

        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const result = await getSpecificItemBusiness.create(token, id)

            res.status(200).send(result)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}