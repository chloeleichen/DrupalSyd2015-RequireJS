define([], function(){
  return{
    init: function(){
      if(document.querySelectorAll('.search').length){
        loadController('search');
      };
      if(document.querySelectorAll('.menu').length){
        loadController('menu');
      };
    }
  }
});

function loadController(controllerName){
  require([controllerName], function(controller){
    controller.init();
    });
}
