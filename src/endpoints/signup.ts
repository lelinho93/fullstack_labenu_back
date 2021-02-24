import { Request, Response } from 'express'
import signupData from '../data/signupData'
import { generateToken } from '../service/authenticator';
import { generate } from '../service/idGenerator'


export default async function signup(
    req: Request,
    res: Response
) {
    try {
        if(!req.body.name ||
           !req.body.nickname ||
           !req.body.email ||
           !req.body.password
        ) {
            throw new Error("Preencha os campos 'name', 'nickname', 'email' e 'password'")
        }

        const id: string = generate();

        await signupData(
            id,
            req.body.name,
            req.body.email,
            req.body.nickname,
            req.body.password,            
            req.body.role
        )

        const token = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({
            message: error.message ||
            error.sqlMessage
        })
    }
}