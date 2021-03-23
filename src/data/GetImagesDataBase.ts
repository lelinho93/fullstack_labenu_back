import { BaseDataBase } from "./BaseDataBase"

export class GetImagesDataBase extends BaseDataBase {

    private static TABLE_NAME = "artimage_images"

    async create(): Promise<any> {

        try {
            const result = await this.getConnection().select("*")
            .from(GetImagesDataBase.TABLE_NAME)

            return result

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}