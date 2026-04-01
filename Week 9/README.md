# Week 9 React Monorepo

This folder is organized as a single npm-workspace monorepo with three separate React projects:

- Exercise 1: `packages/exercise-1-student-profile`
- Exercise 2: `packages/exercise-2-student-cards`
- Exercise 3: `packages/exercise-3-counter`

All projects share one root-level `node_modules` and one `package-lock.json`.

## Install

Run once from the Week 9 root:

```bash
npm install
```

## Run Projects

From the Week 9 root:

```bash
npm run dev:ex1
npm run dev:ex2
npm run dev:ex3
```

## Build Projects

Build all:

```bash
npm run build
```

Or build individually:

```bash
npm run build:ex1
npm run build:ex2
npm run build:ex3
```
