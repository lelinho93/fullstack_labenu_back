import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types/authenticationData'

export function generateToken(id: AuthenticationData): string {

    const token: string = jwt.sign(
        {id}, 
        process.env.JWT_KEY as string, 
        {expiresIn: process.env.JWT_EXPIRES_TIME || "1d" })

        return token
}

export function getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(
        token, 
        process.env.JWT_KEY!) as AuthenticationData 

        return {
            id: payload.id
        }
}

