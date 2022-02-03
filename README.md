# React Shop

Full-stack приложение (ReactJS & NodeJS). Проект состоит из [клиентской](https://github.com/Pro100CaHya/react-shop/tree/main/client) и [серверной](https://github.com/Pro100CaHya/react-shop/tree/main/server) частей.

Для запуска проекта локально необходимо скачать данный репозиторий, или клонировать с помощью команды:
```
git clone https://github.com/Pro100CaHya/react-shop.git
```
Удалить в [файле](https://github.com/Pro100CaHya/react-shop/blob/main/server/routes/ItemRouter.js) код:
```javascript
const corsOptions = {
    origin: "https://pro100cahya-react-shop-client.herokuapp.com",
    optionsSuccessStatus: 200
}
```
Затем необходимо заменить [строки 13-14](https://github.com/Pro100CaHya/react-shop/blob/c6a064da5e6059c9259d99fb4d2cd01622dbeec8/server/routes/ItemRouter.js#L13) на:
```javascript
ItemRouter.post("/items", cors(), ItemController.create);
ItemRouter.get("/items", cors(), ItemController.getAll);
```
Также необходимо заменить эту [строчку](https://github.com/Pro100CaHya/react-shop/blob/4bcdbfd455b490e2d255307e60b528c803a377da/client/src/API/ItemService.js#L7) на:
```javascript
const response = await axios.get("http://localhost:5000/api/items");
```
В случае, если запуск серверной части будет на другом порте (не на 5000), то указать другой порт.

Теперь можно запустить серверную часть:
```
cd server
yarn install
yarn start
```
И клиентскую:
```
cd client
yarn install
yarn start
```
Также вместо `yarn` можно использовать `npm`
