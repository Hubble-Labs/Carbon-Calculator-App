// This file sets up routing for the server to handle api requests
const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

module.exports = router;