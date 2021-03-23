import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/User'


export class TokenManager {

    generate(id: string): string {

        return jwt.sign(
            {id}, 
            process.env.JWT_KEY as string, 
            {expiresIn: process.env.JWT_EXPIRES_TIME || "1d" })            
            
        
    }
    get(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload as AuthenticationData
    }
}