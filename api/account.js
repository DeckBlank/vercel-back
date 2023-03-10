import express from 'express';
import { v4 } from 'uuid';

export const app = express();

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Account Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item', (req, res) => {

  res.end(`Item:`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Account Item: ${slug}`);
});

