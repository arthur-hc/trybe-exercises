const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/all', async (req, res, next) => {
  const products = await ProductModel.getAll();
  if(!products) return res.status(404).json({ code: 'Not Found', message: `We don't found this product, sorry!` });
  return res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if(!product) return res.status(404).json({ code: 'Not Found', message: `We don't found this product, sorry!`});
  return res.status(200).json(product);
});

router.post('/new', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);
  if(newProduct.errno) return res.status(400).json({ code: 'Bad Request', message: newProduct.sqlMessage });
  return res.status(201).json(newProduct);
});

router.delete('/delete/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);
  if(!products) return res.status(404).json({ code: 'Not Found', message: `We don't found this product, sorry!`});
  return res.status(200).json({ code: 'OK', message: `Resource deleted successfully`});
});

router.put('/update/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);
  if(products.message && products.message === 'Not Found') return res.status(404).json({ code: products.message, message: `We don't found this product, sorry!`});
  if(products.message) return res.status(400).json({ code: 'Bad Request', message: products.message})

  return res.status(200).json(products);
});

module.exports = router;