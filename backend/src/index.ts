import express from 'express';
import cors from 'cors';
import * as RecipeAPI from './recipe-api';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/recipes/search', async (req, res) => {
  res.json({ message: 'sucess!!' });
});

app.listen(4000, () => {
  console.log('Server running on Port 4000');
});
