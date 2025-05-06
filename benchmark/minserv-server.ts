import { App } from "@src/index";

const app = new App();

app.get('/', (req, res) => {
  res.send('Hello from Minserv!');
});

app.listen(3003, () => {
  console.log('Minserv server running on port 3003');
});