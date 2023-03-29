const chatRouter = require('../components/chat/chatRoute');

const express = require('express');

function mainRouter(app) {
  // Lista de rutas
  const router = express.Router();  //create a router
  app.use('/api', router);        //use the router
  router.use('/chat', chatRouter);  //use the chatRouter

}

module.exports = mainRouter;
