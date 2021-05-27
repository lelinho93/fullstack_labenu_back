import { image } from "../model/Image"
import { BaseDataBase } from "./BaseDataBase"

export class ImageDataBase extends BaseDataBase {

    private static TABLE_NAME = "artimage_images"

    async create(id: string, subtitle: string, author_id: string, date: Date, file: string, tags: string, collection: string): Promise<void> {
        try {
            await this.getConnection().insert({
                id,
                subtitle,
                author_id,
                date,
                file,
                tags,
                collection,
                
            }).into(ImageDataBase.TABLE_NAME)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}