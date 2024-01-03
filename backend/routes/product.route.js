const {Router} = require('express');
const {create, all, cash } = require('../controller/product.controller');
const productrouter = Router();

productrouter.post("/create", create);
productrouter.get("/all", all);
productrouter.post("/cash", cash);

module.exports =productrouter