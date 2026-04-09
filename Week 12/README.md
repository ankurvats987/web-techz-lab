# Week 12 - Express and MongoDB Basics Lab

## Objective

Implement three independent backend projects using Node.js:

1. RESTful API development with Express routing
2. Middleware execution flow in Express
3. MongoDB CRUD operations with Mongoose ODM

## Folder Structure

```text
Week 12/
  README.md
  exercise-1-rest-api-express/
    package.json
    src/
      app.js
      routes/productRoutes.js
      controllers/productsController.js
      data/productsStore.js
  exercise-2-middleware-demo/
    package.json
    src/
      app.js
      routes/demoRoutes.js
      middleware/requestLogger.js
      middleware/flowMiddleware.js
  exercise-3-mongodb-crud/
    package.json
    .env.example
    src/
      server.js
      app.js
      config/db.js
      models/Product.js
      routes/productRoutes.js
      controllers/productController.js
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB (local or cloud, only for Exercise 3)

## Exercise 1: RESTful API with Express

Project folder: `exercise-1-rest-api-express`

### Covered Functional Requirements

- Express app initialized with `express()`
- JSON parsing with `express.json()`
- REST methods using `app` and router (`GET`, `POST`, `PUT`, `DELETE`)
- Dynamic route params (`/api/products/:id`)
- Request data handled via `req.body` and `req.params`
- Structured responses via `res.json()` and `res.send()`
- Modular structure with separate routes, controller, and data layer

### Run

```bash
cd "Week 12/exercise-1-rest-api-express"
npm install
npm start
```

### API Test Examples

```bash
GET    http://localhost:3001/api/products
GET    http://localhost:3001/api/products/1
POST   http://localhost:3001/api/products
PUT    http://localhost:3001/api/products/1
DELETE http://localhost:3001/api/products/1
```

Sample POST body:

```json
{
  "name": "Keyboard",
  "price": 45,
  "inStock": true
}
```

## Exercise 2: Middleware Demonstration

Project folder: `exercise-2-middleware-demo`

### Covered Functional Requirements

- Custom middleware with `app.use()`
- Request logging (method, URL, timestamp)
- Flow control with `next()`
- Multiple middleware layers and chaining
- Application-level middleware (global)
- Route-level middleware (`routeGuard` for secure route)
- Middleware-based preprocessing and execution order logging

### Run

```bash
cd "Week 12/exercise-2-middleware-demo"
npm install
npm start
```

### API Test Examples

```bash
GET http://localhost:3002/api/public
GET http://localhost:3002/api/secure
GET http://localhost:3002/api/secure?token=lab12
```

Expected behavior:

- `/api/public` returns success
- `/api/secure` without token returns `401`
- `/api/secure?token=lab12` returns success and middleware flow trace

## Exercise 3: MongoDB CRUD with Mongoose

Project folder: `exercise-3-mongodb-crud`

### Covered Functional Requirements

- MongoDB connection using Mongoose
- Schema definition with `mongoose.Schema`
- Model creation with `mongoose.model`
- CRUD operations using async/await
- Insert: `Product.create()`
- Retrieve: `Product.find()`
- Update: `findByIdAndUpdate()`
- Delete: `findByIdAndDelete()`
- Database connection handling with startup error management
- API responses returned via Express (`res.json`, `res.status`)

### Setup

1. Create `.env` in project root
2. Copy values from `.env.example`
3. Update `MONGODB_URI` if needed

Example `.env`:

```env
PORT=3003
MONGODB_URI=mongodb://127.0.0.1:27017/week12_lab
```

### Run

```bash
cd "Week 12/exercise-3-mongodb-crud"
npm install
npm start
```

### API Test Examples

```bash
POST   http://localhost:3003/api/products
GET    http://localhost:3003/api/products
PUT    http://localhost:3003/api/products/:id
DELETE http://localhost:3003/api/products/:id
```

Sample POST body:

```json
{
  "name": "Monitor",
  "price": 220,
  "inStock": true
}
```

## Notes

- Each exercise is built as a separate Node.js project as requested.
- Exercise 1 and Exercise 2 run independently with Express.
- Exercise 3 requires an active MongoDB connection.
