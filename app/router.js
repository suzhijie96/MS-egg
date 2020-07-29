'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/register', controller.register.create);
  // router.get('/register/findAll', controller.register.index);
  // router.post('/register/update', controller.register.update);
  router.resources('/login', controller.register)
};
