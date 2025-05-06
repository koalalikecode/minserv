import { App } from "../src";

const app = new App();

app.get('/', (req, res) => {
  res.send('Hello from Minserv!');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello from Minserv!' });
});

app.listen(3000);
