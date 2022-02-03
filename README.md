# React Shop

Full-stack приложение (ReactJS & NodeJS). Проект состоит из [клиентской](https://github.com/Pro100CaHya/react-shop/tree/main/client) и [серверной](https://github.com/Pro100CaHya/react-shop/tree/main/server) частей.

Для запуска проекта локально необходимо скачать данный репозиторий, или клонировать с помощью команды:
```
git clone https://github.com/Pro100CaHya/react-shop.git
```
Заменить [строчку](https://github.com/Pro100CaHya/react-shop/blob/d8c1aaf230816f2f9079f964867f2f87a218f0c4/server/routes/ItemRouter.js#L9) на:
```javascript
origin: "http://localhost:3000",
```
В случае, если запуск клиентской части будет на другом порте (не на 3000), то указать другой порт.

Также необходимо заменить эту [строчку](https://github.com/Pro100CaHya/react-shop/blob/4bcdbfd455b490e2d255307e60b528c803a377da/client/src/API/ItemService.js#L7) на:
```javascript
const response = await axios.get("http://localhost:5000");
```
В случае, если запуск серверной части будет на другом порте (не на 5000), то указать другой порт.

Теперь можно запустить серверную часть:
```
cd server
yarn start
```
И клиентскую:
```
cd client
yarn start
```
