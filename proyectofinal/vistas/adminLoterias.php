<link rel="stylesheet" href="../css/main.css">

<body>
	<form action="" class="formularioApuestas">
		<div>
		<input ng-model="loteria.nombre" type="text" pattern="[A-Za-z]{1-20}" placeholder="Agregar Loteria">
		<button  class="btn" ng-click="addLoteria()">Agregra Loteria</button>
		</div>
		<div class="loteria">
		<input type="text" ng-model="numerobloqueado.numero" placeholder="Bloquear numero">
		<select ng-options="loteria.nombre for loteria in loterias" ng-model="loteriaSeleccionada"></select>
		
		</div>
		<div>
			<button ng-click="bloquearNumero(numerobloqueado.numero)" class="btn">Bloquear numero</button>
		</div>
		<div>
		<select ng-options="usuario.username for usuario in usuarios" ng-model="usuario">
			
		</select>
		<button  class="btn" ng-click="bloquearUsuario(usuario.username)">Bloquear Usuario</button>
	</div>
	</form>
