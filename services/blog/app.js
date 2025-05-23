const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const posts = [
  { id: 1, title: 'First Post', content: 'Hello World' },
  { id: 2, title: 'Second Post', content: 'Kubernetes is awesome' }
];

app.get('/blog/posts', (req, res) => {
  res.json(posts);
});

app.get('/blog/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Blog service running on port ${PORT}`);
});
