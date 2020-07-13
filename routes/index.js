const express = require('express');

const createStore = require('../controllers/store/create');
const getStore = require('../controllers/store/get');
const loginStore = require('../controllers/store/login');
const deleteStore = require('../controllers/store/delete')

const getProducts = require('../controllers/product/get');
const createProduct = require('../controllers/product/create');
const updateProduct = require('../controllers/product/update');
const deleteProduct = require('../controllers/product/delete');
const { request } = require('express');

const routes = express.Router()

routes.post('/create-store', createStore.create);
routes.post('/login-store', loginStore.index);
routes.get('/get-list-store', getStore.index);
routes.delete('/delete-store', deleteStore.delete);

routes.get('/get-products', getProducts.index);


module.exports = routes;
