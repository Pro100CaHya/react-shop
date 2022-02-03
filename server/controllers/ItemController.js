import ItemService from "../services/ItemService.js";

class ItemController {

    async create(req, res) {

        try {
            
            const item = await ItemService.create(req.body, req.files.picture);
            res.json(item);

        } catch (e) {

            res.status(500).json(e);

        }

    }

    async getAll(req, res) {

        try {

            const items = await ItemService.getAll();
            return res.json(items);

        } catch (e) {

            res.status(500).json(e);

        }

    }

}

export default new ItemController();