import Item from "../models/ItemModel.js";
import FileService from "./FileService.js";

class ItemService {

    async create(item, picture) {

        const fileName = FileService.saveFile(picture);
        const createdItem = await Item.create({ ...item, picture });
        return createdItem;

    }

    async getAll() {

        const items = await Item.find();
        return items;

    }

}

export default new ItemService();