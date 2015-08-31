requirejs.config({
  baseUrl: 'assets',
  paths:{}
});

requirejs(['main'], function(obj){
  obj.init();
});
