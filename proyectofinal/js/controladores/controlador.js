//var modController=angular.module('tuChanceApp.controllers',[]);
modulo.controller('tuChanceCtrl',function($scope,$http,$rootScope){
$scope.loteria={};
$scope.loteria.idloterias="";
$scope.loteria.nombre="";
$rootScope.loterias=[];
var usuario=angular.fromJson(localStorage.getItem('usuario'));
 
$scope.conectado=usuario[0].username;

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
$rootScope.getLoterias=function(){
$http({
			method:'GET',
			url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/loterias/'

		}).then(function successCallback(response){
			$scope.loterias=response.data;
		},function errorCallback (response){
			console.log(response.data);
		});
};
$scope.getLoteriasSeries=function(id){
$http({
			method:'GET',
			url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/loteriasSeries/'+id

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
         fecha:$scope.apuesta.fecha=new Date().toJSON().slice(0,10),
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
    	
    	var datos=JSON.stringify(apuesta);
    	console.log(angular.toJson(apuesta,true));
    	$http({
			method:'POST',
			url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/apuestas/',
			data: angular.toJson(apuesta,true)
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
      $scope.cerrarSesion=function(){
            localStorage.clear();
            window.location.href='login.html';
        };
    
	$scope.getLoterias();
});
//var adminController=angular.module('tuChanceApp.controllers',[]);
moduloAdmin.controller('adminTuChanceCtrl',function($scope,$http,$rootScope){
    var usuario=angular.fromJson(localStorage.getItem('usuario'));
 
$scope.conectado=usuario[0].username;

    $scope.loteria={};
    $scope.loteria.idloterias="";
    $scope.loteria.nombre="";
    $scope.roles=[
        {
        "rol": "Administrador",
        "valor": 1
      },
      {
        "rol": "Usuario",
        "valor": 0
      }
    ];
    $scope.permisos=[
        {
        "acceso": "Habilitado",
        "valor": 0
      },
      {
        "acceso": "Inhabilitado",
        "valor": 1
      }
    ];
    $scope.usuario={};
    $scope.usuario.cedula="";
    $scope.usuario.nombre="";
    $scope.usuario.idusuarios="";
    $scope.usuario.username="";
    $scope.usuario.password="";
    $scope.permiso="";
    $scope.role="";
    $scope.loterias=[];
    $scope.usuarios=[];

    $scope.numerobloqueado={};
    $scope.numerobloqueado.numero="";
    $scope.numerobloqueado.idloteria="";
    $scope.loteriaSeleccionada="";
    $scope.addUsuario=function(){
        var datos={
        cedula:$scope.usuario.cedula,
        nombre:$scope.usuario.nombre,
        apellido:$scope.usuario.apellido,
        username:$scope.usuario.username,
        password:$scope.usuario.password,
        habilitado:$scope.role.valor,
        administrador:$scope.permiso.valor
    };
        console.log(datos);
        $http({
            method:'POST',
            url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/usuarios',
            data:angular.toJson(datos,true)
        }).then(function successCallback(response){
            if(angular.fromJson(response.data).status==="OK"){
                console.log('funciona');
            }
        },function errorCallback (response){
            if(angular.fromJson(response.data).status==="ERROR"){
                alert(angular.fromJson(response.data).messages[0]);
            }

        });;
    };
    
    $scope.addLoteria=function(){
        $http({
            method:'POST',
            url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/loterias',
            data:angular.toJson($scope.loteria,true)           

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
    $scope.bloquearNumero=function(numero){
       
       $scope.numerobloqueado.idloteria=$scope.loteriaSeleccionada.idloterias;
        
        console.log($scope.loteriaSeleccionada.idloterias);
        $http({
            method:'POST',
            url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/bloquear/'+numero,
            data:angular.toJson($scope.numerobloqueado,true)           

        }).then(function successCallback(response){
            if(angular.fromJson(response.data).status=="OK"){
                console.log('funciona');
            }
        },function errorCallback (response){
            if(angular.fromJson(response.data).status=="ERROR"){
                alert(angular.fromJson(response.data).messages[0]);
            }

        });
    };
    $scope.getLoterias=function(){
$http({
            method:'GET',
            url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/loterias/'

        }).then(function successCallback(response){
            $scope.loterias=response.data;
        },function errorCallback (response){
            console.log(response.data);
        });
};
    $scope.getUsuarios=function(){
      $http({
           method:'GET',
           url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/usuarios'
      }).then(function successCallback(response){
            $scope.usuarios=response.data;
        },function errorCallback (response){
            console.log(response.data);
        });
    };
    $scope.bloquearUsuario=function(username){
        console.log(username);
      $http({
        method:'PUT',
        url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/usuarios/'+username,
        data:angular.toJson($scope.usuario,true)
      }).then(function successCallback(response){
            if(angular.fromJson(response.data).status=="OK"){
                console.log('funciona');
            }
        },function errorCallback (response){
            if(angular.fromJson(response.data).status=="ERROR"){
                alert(angular.fromJson(response.data).messages[0]);
            }

        });
    };
    $scope.cerrarSesion=function(){
            localStorage.clear();
            window.location.href='login.html';
        };
$scope.getUsuarios();
$scope.getLoterias();
});
//var loginController=angular.module('tuChanceApp.controllers',[]);
moduloLogin.controller('loginTuChanceCtrl',function($scope,$http,$location,$q,$state){
        $scope.usuario={};
        $scope.usuario.username="";
        $scope.usuario.password="";
        $scope.usuarioAutenticado=[];


         var diferir=$q.defer();
       
        $scope.autenticarSesion=function(usuario){
        	$http({
        		method:'GET',
        		url:'https://tuchance-jhonesi.c9users.io/serviciosTuChance/api/usuarios/autenticar/'+angular.toJson(usuario,true),
        		
        	}).then(function successCallback(response){
        		console.log(response.data);
			    $scope.usuarioAutenticado=response.data;
                diferir.resolve();
                localStorage.setItem('usuario',angular.toJson(response.data));

                  
             
		    },function errorCallback (response){
			console.log(response.data);
		    });
        };
        diferir.promise.then(function(){
          //$scope.autenticarSesion($scope.usuario);
              console.log($scope.usuarioAutenticado[0].username);
              console.log($scope.usuarioAutenticado[0].bloqueado);
              console.log($scope.usuarioAutenticado[0].administrador);
             if($scope.usuarioAutenticado[0].username ==$scope.usuario.username && 
             	$scope.usuarioAutenticado[0].bloqueado!=1 &&
             	$scope.usuarioAutenticado[0].administrador==1){
                console.log('entro');
             	 //$state.go('administrador');
                location.href='indexAdmin.php';
             }else if($scope.usuarioAutenticado[0].username ==$scope.usuario.username && 
                $scope.usuarioAutenticado[0].bloqueado!=1 &&
                $scope.usuarioAutenticado[0].administrador==0){
                    location.href='viewOpciones.php';
             }else{

             }
         
        });

});