import { GetImagesDataBase } from "../data/GetImagesDataBase"
import { TokenManager } from "../service/authenticator"

export class GetImagesBusiness {

    async create(token: string) {

        try {
            const getImagesDataBase = new GetImagesDataBase()
            const tokenManager = new TokenManager()
            const verifiedToken = tokenManager.get(token)

            if(!verifiedToken){
                throw new Error("Faça o login!")
            }

            const result = await getImagesDataBase.create()

            return result


        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}