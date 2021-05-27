import { BaseDataBase } from "./BaseDataBase"

export class GetSpecificItemDataBase extends BaseDataBase {

    private static TABLE_NAME = "artimage_images"

    async create(id: string): Promise<any> {

        try {
            const result = await this.getConnection().select("*")
            .from(GetSpecificItemDataBase.TABLE_NAME)
            .where({id})

            return result 

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}