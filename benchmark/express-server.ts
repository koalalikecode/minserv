import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3001, () => console.log('Express server running on port 3001'));
