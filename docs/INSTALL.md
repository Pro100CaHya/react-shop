# React Shop

## Инструкция по запуску

Сначала необходимо скачать данный репозиторий и распаковать в любую удобную директорию. Или склонировать с помощью `git`, для этого ввести команду:

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

Для запуска приложения необходимо:

1. Сначала установить npm-зависимости для серверной части. Для этого переходим в папку `server` и выполняем команду:

```
npm install
```

2. Запускаем серверную часть:

```
npm start
```

3. Переходим в папку `client` и устанавливаем зависимости командой из пункта (1)

4. Запускаем клиентскую часть командой из пункта (2)

--------------

¹ - вместо `npm` можно использовать менеджер пакетов `yarn`. Тогда для установки зависимостей:

```
yarn install
```

А для запуска:

```
yarn start
```

[Вернуться назад](/README.md)
