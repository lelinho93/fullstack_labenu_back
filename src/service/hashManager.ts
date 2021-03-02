import * as bcrypt from 'bcryptjs'


export class HashManager {

    async hash(plainText: string): Promise<string> {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = bcrypt.genSaltSync(cost)
        const cypherText: string = bcrypt.hashSync(plainText, salt)
        return cypherText
    }

    async compare(plainText: string, cypherText: string): Promise<boolean>{
        return await bcrypt.compare(plainText, cypherText)
    }
}   
