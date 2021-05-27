import { user } from "../model/User"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {

    private static TABLE_NAME = "user_artimage"
    
   
    async create(id: string, name: string, nickname: string, email: string, password: string){
        try { 
            await this.getConnection().insert({
            id,
            name,
            email,
            nickname,
            password
        }).into(UserDataBase.TABLE_NAME)
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

    async getUserByEmail(email: string): Promise<user> {

        try {
            const result = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({email})

            if(!result[0]){
                throw new Error("Usuário não encontrado em nosssa base de dados!")
            }

            return {
                id: result[0].id,
                name: result[0].name,
                nickname: result[0].nickname,
                email: result[0].email,
                password: result[0].password
            }
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}