import axios from "axios";

export default class ItemService {

    static async getAll () {

        const response = await axios.get("https://pro100cahya-react-shop-server.herokuapp.com/api/items");
        return response.data;

    }

}