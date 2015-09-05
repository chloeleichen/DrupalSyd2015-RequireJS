(function(){
	requirejs.config({
	  baseUrl: 'assets',
	  paths:{}
	});

	requirejs(['main']);

	// requirejs(['main'], function(obj){
	//   obj.init();
	// });

})();
