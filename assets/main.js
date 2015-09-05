// define([], function(){
//   var button = document.getElementById('button');
//   var loadController = function(controllerName){
//     require([controllerName], function(controller){
//       controller.init();
//       });
//   }
//   return{
//     init: function(){
//       if(document.querySelectorAll('.search').length){
//         loadController('search');
//       };
//       if(document.querySelectorAll('.menu').length){
//         loadController('menu');
//       };

//       button.onclick = function(){
//       var alerter = require(["alerter"], function(alerter){
//             alerter("alerter is loaded");
//           });
//       }
//     }
//   }
// });


define(function(){
  var button = document.getElementById('button');
  button.onclick = function(){
  var alerter = require(["alerter"], function(alerter){
      alerter("alerter is loaded");
    });
  }
});
