import * as jwt from 'jsonwebtoken'


export class TokenManager {

    generate(id: string): string {

        return jwt.sign(
            {id}, 
            process.env.JWT_KEY as string, 
            {expiresIn: process.env.JWT_EXPIRES_TIME || "1d" })            
            
        
    }
    get(token: string): object {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload as object
    }
}