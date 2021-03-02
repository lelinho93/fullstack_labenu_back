import { IdGenerator } from "../service/idGenerator";
import { ImageDataBase } from "../data/ImageDataBase"

export class ImageBusiness {

    async create(subtitle: string, author: string, file: string, tags: string, collection: string){

        try {
            const idGenerator = new IdGenerator()
            const date = new Date()
            const imageDataBase = new ImageDataBase()

            const id = idGenerator.generate()
            const author_id = "e0b5ae1f-92cf-4048-b9dc-6c506b1cb82f"

        
        await imageDataBase.create(id, subtitle, author, date, file, tags, collection, author_id)
            
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }
}