const express = require('express');
const router = express.Router();

const posts = [];

const postVerification = (req, res, next) => {
  const { id } = req.params;
  const postsResults = posts.filter((post) => post.id === id);

  if(postsResults.length === 0) return res.status(404).json({ message: "Post not found" });
 
  next();
};

router.get('/:id', postVerification, (_req, res) => {
  res.status(200).json({ posts })
});

router.get('/', (req, res) => {
  res.status(200).json({ posts });
});

module.exports = router;