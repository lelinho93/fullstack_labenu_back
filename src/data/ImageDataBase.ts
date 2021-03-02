import { image } from "../model/Image"
import { BaseDataBase } from "./BaseDataBase"

export class ImageDataBase extends BaseDataBase {

    private static TABLE_NAME = "artimage_images"

    async create(id: string, subtitle: string, author: string, date: Date, file: string, tags: string, collection: string, author_id: string): Promise<void> {
        try {
            await this.getConnection().insert({
                id,
                subtitle,
                author,
                date,
                file,
                tags,
                collection,
                author_id
            }).into(ImageDataBase.TABLE_NAME)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}