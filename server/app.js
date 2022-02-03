import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import ItemRouter from "./routes/ItemRouter.js";

const PORT = process.env.PORT || 5000;
const DB_URL = `mongodb+srv://root:root@items.l3vq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", ItemRouter);

async function startApp() {

    try {

        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log(`Server working on port ${PORT}`));

    } catch (e) {

        console.log(e);

    }

}

startApp();