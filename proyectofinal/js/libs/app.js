'use strict';
var modulo=angular.module('tuChanceApp',['ui.router','ngRoute']);
modulo.config(function($routeProvider,$urlRouterProvider,$stateProvider){

  if(localStorage['usuario']===undefined){
       window.location.href='index.html';
  }else{
	$routeProvider
	.when('/',{
		templateUrl:'viewApuestas.php',
		controller: 'tuChanceCtrl'
	}).when('/viewEstadisticas',{
       templateUrl:'viewEstadisticas.php',
		controller: 'tuChanceCtrl'
	})
	$urlRouterProvider.otherwise('/');
}
});
var moduloAdmin=angular.module('AdmintuChanceApp',['ui.router','ngRoute']);
moduloAdmin.config(function($routeProvider,$urlRouterProvider,$stateProvider){
  var usuario=angular.fromJson(localStorage.getItem('usuario'));
 
  if(localStorage['usuario']===undefined || usuario[0].administrador==0){
       window.location.href='index.html';
  }else{
    $routeProvider
.when('/',{
        templateUrl:'usuarios.php',
        controller:'adminTuChanceCtrl'
    }).when('/ventas',{
            templateUrl:'ventas.php',
        controller:'adminTuChanceCtrl'
    }).when('/estadisticas',{
          templateUrl:'estadisticas.php',
        controller:'adminTuChanceCtrl'
    }).when('/vistaMensajes',{
          templateUrl:'vistaMensajes.php',
        controller:'adminTuChanceCtrl'
    }).when('/adminLoterias',{
        templateUrl:'adminLoterias.php',
        controller:'adminTuChanceCtrl'
    }).when('/agregarusuario',{
      templateUrl:'agregarusuario.php',
      controller:'adminTuChanceCtrl'
    });
        $urlRouterProvider.otherwise('/');
        }
});
var moduloLogin=angular.module('logintuChanceApp',['ui.router','ngRoute']);
moduloLogin.config(function($routeProvider,$urlRouterProvider,$stateProvider){
       $urlRouterProvider.otherwise('/');
        $stateProvider
  .state('login', 
  {        
        controller: 'loginTuChanceCtrl',
        templateUrl: '../vistas/login.html'
  })
  .state('administrador',   {
        
        redirectTo: 'indexAdmin.php',
        controller:  'loginTuChanceCtrl'
  })
  .state('usuario',
   {
        
        controller: 'loginTuChanceCtrl',
        templateUrl: '../vistas/viewOpciones.php'
   });

});