import { GetSpecificItemDataBase } from "../data/GetSpecificItemDataBase"
import { TokenManager } from "../service/authenticator"

export class GetSpecificItemBusiness {

    async create(token: string, id: string) {

        try {

            const getSpecificItemDataBase = new GetSpecificItemDataBase()
            const tokenManager = new TokenManager()
            const verifiedToken = tokenManager.get(token)

            if(!verifiedToken) {
                throw new Error("Faça o login!")
            }

            const result = await getSpecificItemDataBase.create(id)

            return result
            
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}