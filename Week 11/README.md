# Week 11 - Node.js Basics Lab

## Objective

Implement three separate Node.js projects to understand:

1. HTTP server creation without external frameworks
2. File system operations using callbacks
3. Event-driven programming with custom events and listeners

## Folder Structure

```text
Week 11/
  README.md
  exercise-1-http-server/
    package.json
    server.js
  exercise-2-file-operations/
    package.json
    fileOperations.js
  exercise-3-events-demo/
    package.json
    eventsDemo.js
```

## Prerequisite

- Node.js installed (any modern LTS version)

## Exercise 1: Simple HTTP Server

Project folder: `exercise-1-http-server`

### What it demonstrates

- Importing modules with `require()`
- Using built-in `http` module
- Creating server with `http.createServer()`
- Handling request-response callback
- Sending response with `response.write()` and `response.end()`
- Setting headers with `response.setHeader()`
- Running server with `listen()` on port 3000
- Console logging for server status and incoming requests

### Run

```bash
cd "Week 11/exercise-1-http-server"
npm start
```

### Browser test

Open:

```text
http://localhost:3000
```

Expected: HTML response confirming server is running and showing requested URL.

## Exercise 2: File Operations with fs

Project folder: `exercise-2-file-operations`

### What it demonstrates

- Importing `fs` module with `require()`
- Creating file using `fs.writeFile()`
- Reading file using `fs.readFile()`
- Appending data using `fs.appendFile()`
- Deleting file using `fs.unlink()`
- Asynchronous execution with nested callbacks
- Error-first callback handling for each operation
- Console logging of each step and result

### Run

```bash
cd "Week 11/exercise-2-file-operations"
npm start
```

Expected console flow:

1. File created
2. File read
3. Data appended
4. File read again
5. File deleted

## Exercise 3: Event-Driven Programming

Project folder: `exercise-3-events-demo`

### What it demonstrates

- Importing `events` module with `require()`
- Creating EventEmitter instance
- Registering listeners with `on()`
- Triggering custom events with `emit()`
- Passing event data via arguments
- Multiple listeners for a single event
- Callback execution when events are emitted
- Async behavior through delayed event emission (`setTimeout`)

### Run

```bash
cd "Week 11/exercise-3-events-demo"
npm start
```

Expected console flow:

1. Immediate custom event output
2. Multiple listener outputs for same event
3. Delayed asynchronous event outputs

## Submission Notes

- Each exercise is implemented as an independent Node.js project.
- No external frameworks are used.
- All required Node.js fundamentals from the lab sheet are covered.
