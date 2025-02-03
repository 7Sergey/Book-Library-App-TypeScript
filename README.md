# Book-Library-App

Book-Library-App — это приложение для управления библиотекой книг, которое предоставляет пользователям возможности добавления, фильтрации, удаления и пометки книг как избранных. Приложение состоит из фронтенд- и бекенд-частей.

[Посмотреть проект в действии](https://book-library-app-azure.vercel.app/)


## [Версия на JavaScript](https://github.com/7Sergey/Book-Library-App)

## Возможности

- **Добавление книг**:
  - Ручное добавление через форму и оправка её на сервер
  - Добавление случайной книги через API.
- **Удаление книг**.
- **Добавление книг в избранное**.
- **Фильтрация книг**:
  - По названию.
  - По автору.
  - По статусу (избранное).

## Архитектура проекта

### Фронтенд

- **React** и **Redux**.
- Основные компоненты:
  - `BookForm` — форма для добавления книг.
  - `BookList` — список книг с возможностью удаления и добавления в избранное.
  - `Error` — отображение ошибок.
  - `Filter` — фильтрация книг.

### Бекенд

- **Node.js** и **Express**.
- API предоставляет случайную книгу из базы данных Mongo
- API отправляет книгу в базу данных Mongo

### Редьюсеры

1. **Books Reducer** (`booksSlice`):

   - Управляет состоянием списка книг.
   - Поддерживает операции добавления, удаления и пометки книг как избранных.
   - Включает асинхронный `thunk` для получения книги из API.

2. **Error Reducer** (`errorSlice`):

   - Управляет состоянием ошибок.
   - Позволяет задавать и очищать сообщения об ошибках.

3. **Filter Reducer** (`filterSlice`):

   - Управляет фильтрами для книг (по названию, автору и статусу избранного).
   - Поддерживает сброс фильтров к начальному состоянию.

## Установка и запуск

### Предварительные требования

- Node.js 16+
- npm или yarn

### Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/7Sergey/Book-Library-App-TypeScript.git
   ```

2. Установите зависимости для фронтенда:

   ```bash
   cd frontend
   npm install
   ```

3. Установите зависимости для бекенда:

   ```bash
   cd ../api
   npm install
   ```

4. Запустите бекенд:

   ```bash
   npm start
   ```

   Бекенд доступен на `http://localhost:4000`.

5. Запустите фронтенд:

   ```bash
   cd ../frontend
   npm run dev
   ```

   Фронтенд доступен на `http://localhost:5173`.

## API

### `GET /books/random`

- Получение случайной книги

**Пример ответа:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "year": 1958
}
```

### `POST /books/`

- Отправка книги в базу данных.

## Скрипты

### Фронтенд

- `npm run dev` — Режим разработки.
- `npm run build` — Сборка.

### Бекенд

- `npm run dev` — Режим разработки.
- `npm start` — Запуск сервера.

## Используемые технологии

- **Фронтенд**: React, Redux, Vite, Axios, React Icons.
- **Бекенд**: Node.js, MongoDB, Express, CORS, Nodemon.

## Возможности для улучшения

- Авторизация пользователей.
- Unit- и e2e-тесты.
