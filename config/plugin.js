'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //cors跨域插件添加 
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
  enable: true,
  package: 'egg-mysql',
}
};

