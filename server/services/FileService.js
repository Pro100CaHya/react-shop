import * as path from "path";

class FileService {

    saveFile(file) {

        try {
            
            const fileName = file.name;
            const filePath = path.resolve("public/assets/img", fileName);
            file.mv(filePath);
            return fileName;
            
        } catch (error) {

            console.log(error);

        }

    }

}

export default new FileService();