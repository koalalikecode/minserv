# Minserv

A minimal high-performance server framework for Node.js, built with TypeScript.  
**This project is for learning and educational purposes only. It is not intended for production use.**

## Features

- Minimal and easy-to-read codebase
- Simple routing
- Middleware support
- Written in TypeScript

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run example

```bash
npx ts-node examples/hello-world.ts
```

## Usage

```typescript
import { App, cors, jsonBodyParser } from 'minserv';

const app = new App();

app.use(cors());
app.use(jsonBodyParser());

app.get('/', (req, res) => {
  res.send('Hello from Minserv!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Middlewares

- `jsonBodyParser()` – Parse JSON request bodies
- `cors()` – Enable CORS headers

## Project Structure

- `src/` – Source code
- `examples/` – Example usage
- `benchmark/` – Benchmark scripts

## License

MIT

---

**Note:**  
This project is for learning how to build a Node.js library from scratch.  
It is not production-ready and should not be used in real-world applications.