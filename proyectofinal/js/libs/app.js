'use strict';
var modulo=angular.module('tuChanceApp',['tuChanceApp.controllers','ui.router','ngRoute']);
modulo.config(function($routeProvider,$urlRouterProvider){
	$routeProvider
	.when('/',{
		templateUrl:'viewApuestas.php',
		controller: 'tuChanceCtrl'
	}).when('/viewEstadisticas',{
       templateUrl:'viewEstadisticas.php',
		controller: 'tuChanceCtrl'
	});
	$urlRouterProvider.otherwise('/');
});
var modAdmin=angular.module('adminTuChanceApp',['adminTuChanceApp.controllers','ui.router','ngRoute']);
modAdmin.config(function($routeProvider,$urlRouterProvider){
    $routeProvider
    .when('/',{
        templateUrl:'usuarios.php',
        controllers:'adminTuChanceCtrl'
    }).when('/ventas',{
            templateUrl:'ventas.php',
        controllers:'adminTuChanceCtrl'
    }).when('/estadisticas',{
          templateUrl:'viewEstadisticas.php',
        controllers:'adminTuChanceCtrl'
    }).when('/vistaMensajes',{
          templateUrl:'vistaMensajes.php',
        controllers:'adminTuChanceCtrl'
    }).when('/adminLoterias',{
    	templateUrl:'adminLoterias.php',
        controllers:'adminTuChanceCtrl'
    });
    $urlRouterProvider.otherwise('/');
});