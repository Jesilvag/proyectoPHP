var modController=angular.module('tuChanceApp.controllers',[]);
modController.controller('tuChanceCtrl',function($scope,$http){
$scope.loteria={};
$scope.loteria.idloterias="";
$scope.loteria.nombre="";
$scope.loterias=[];



$scope.apuesta={};
$scope.apuesta.fecha="";
$scope.apuesta.numeroApuesta="";
$scope.apuesta.serie="";
$scope.apuesta.loteria="";
$scope.apuesta.valorApuesta="";
$scope.apuesta.premio="";
$scope.apuestas=[];
$scope.totalApuesta=0;

$scope.loteriasSeries=[];
$scope.loteriaSerie={};
$scope.loteriaSerie.idloterias="";
$scope.loteriaSerie.numSerie="";
$scope.getLoterias=function(){
$http({
			method:'GET',
			url:'http://localhost/serviciosTuChance/api/loterias/'

		}).then(function successCallback(response){
			$scope.loterias=response.data;
		},function errorCallback (response){
			console.log(response.data);
		});
};
$scope.getLoteriasSeries=function(id){
$http({
			method:'GET',
			url:'http://localhost/serviciosTuChance/api/loteriasSeries/'+id

		}).then(function successCallback(response){
			$scope.loteriasSeries=response.data;
		},function errorCallback (response){
			console.log(response.data);
		});
};
$scope.mostrarSeries=function(){
   $scope.getLoteriasSeries($scope.loteria.idloterias);
};
$scope.$watch(function(){
    
	switch($scope.apuesta.numeroApuesta.length)
	{ 
		case 2:
         $scope.apuesta.premio=parseInt($scope.apuesta.valorApuesta)*350;
		break;
		case 3:
			 $scope.apuesta.premio=parseInt($scope.apuesta.valorApuesta)*600;
		break;
		case 4:
			 $scope.apuesta.premio=parseInt($scope.apuesta.valorApuesta)*4500;
		break;
		case 5:
			$scope.apuesta.premio=parseInt($scope.apuesta.valorApuesta)*6000;
		break;
		  
	}
		});


    $scope.hacerApuesta=function(){

     $scope.apuestas.push(
     	{
         numeroApuesta:$scope.apuesta.numeroApuesta,
         serie:$scope.apuesta.serie=$scope.loteriaSerie.numSerie,
         loteria:$scope.loteria,
         fecha:$scope.apuesta.fecha=new Date(),
         valorApuesta:$scope.apuesta.valorApuesta,
         premio:$scope.apuesta.premio
     	}
     	);
     $scope.totalTransaccion();
    };
    $scope.totalTransaccion=function(){
    	console.log($scope.apuestas.length);
        
	  for(i=$scope.apuestas.length-1;i<$scope.apuestas.length;i++){
             //console.log($scope.apuestas[i].valorApuesta);
             $scope.totalApuesta+=$scope.apuestas[i].valorApuesta;

	  }
    };
     $scope.agregarTransaccion=function(){
         for (i = 0; i < $scope.apuestas.length; i++) {
         	$scope.confirmarTransaccion($scope.apuestas[i]);
         }
     };
    $scope.confirmarTransaccion=function(apuesta){
    	console.log(apuesta);
    	var json=JSON.stringify(apuesta);
    	console.log(json);
    	$http({
			method:'POST',
			url:'http://localhost/serviciosTuChance/api/loterias/',
			data: json
		}).then(function successCallback(response){
			if(angular.fromJson(response.data).status==="OK"){
				console.log('funciona');
			}
		},function errorCallback (response){
			if(angular.fromJson(response.data).status==="ERROR"){
				alert(angular.fromJson(response.data).messages[0]);
			}

		});
	};
    
	$scope.getLoterias();
});
var adminController=angular.module('adminTuChanceApp.controllers',[]);
adminController.controller('adminTuChanceCtrl',function($scope,$http){

	});