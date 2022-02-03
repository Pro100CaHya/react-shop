import Router from "express";
import cors from "cors";

import ItemController from "../controllers/ItemController.js";

const ItemRouter = new Router();

const corsOptions = {
    origin: "https://pro100cahya-react-shop-client.herokuapp.com",
    optionsSuccessStatus: 200
}

ItemRouter.post("/items", cors(corsOptions), ItemController.create);
ItemRouter.get("/items", cors(corsOptions), ItemController.getAll);

export default ItemRouter;