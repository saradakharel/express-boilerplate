import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('hello');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
