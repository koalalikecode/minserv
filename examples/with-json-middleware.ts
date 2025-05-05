import { App, jsonBodyParser } from '../dist/index.mjs';

const app = new App();

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Body parser middleware
app.use(jsonBodyParser());

app.get('/', (req, res) => {
  res.send('Hello from Minserv with middleware!');
});

app.post('/echo', (req, res) => {
  res.send(`Received POST body: ${JSON.stringify(req.body)}`);
});

app.listen(3003);
