import { IdGenerator } from "../service/idGenerator";
import { ImageDataBase } from "../data/ImageDataBase"
import { TokenManager } from "../service/authenticator";

export class ImageBusiness {

    async create(subtitle: string, file: string, tags: string, collection: string, token: string){

        try {
            const idGenerator = new IdGenerator()
            const date = new Date()
            const imageDataBase = new ImageDataBase()
            const tokenManager = new TokenManager()

            const id = idGenerator.generate() 
            const verifiedToken = tokenManager.get(token)           
            const author_id = verifiedToken.id

            
            if(!subtitle || !file || !tags || !collection){
                throw new Error("Preencha todos os campos!")
            }
            if(!verifiedToken){
                throw new Error("Faça o login!")
            }

        
        await imageDataBase.create(id, subtitle, author_id, date, file, tags, collection)
            
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }
}