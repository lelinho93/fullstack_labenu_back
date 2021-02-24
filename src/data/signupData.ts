import { connection } from '../index'


export default async function signupData(
    id: string,
    name: string,
    email: string,
    nickname: string,
    password: string,
    role?: string
) {    
    await connection.insert({
        id,
        name,
        email,
        nickname,
        password,         
        role
    }).into('user_artimage')
}
