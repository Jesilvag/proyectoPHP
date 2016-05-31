<!DOCTYPE html>
<html lang="en" ng-app="adminTuChanceApp">
<head>
	<meta charset="UTF-8">
	<title>Administrador</title>
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../css/style.css">
	<script type="text/javascript" src="../js/jquery.js"></script>
		<script type="text/javascript" src="../js/dist/Chart.bundle.js"></script>
		<script type="text/javascript" src="../js/libs/angular.js"></script>
		<script type="text/javascript" src="../js/libs/angular-ui-router.js"></script>
    <script type="text/javascript" src="../js/libs/angular-route.js"></script>
	<script type="text/javascript" src="../js/libs/app.js"></script>
	<script type="text/javascript" src="../js/controladores/controlador.js"></script>

	<script type="text/javascript" src="../js/main.js"></script>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 

</head>
<body>
	<header>
		<h1>Tu Chance-Administrador</h1>
		<div class="menu_bar">
			<a href="#" class="btn_menu"><span class="icon-menu3"></span>Menu</a>
		</div>
	</header>
	<div class="menu">
	<nav>
		<ul id="opciones">
	           <li><a href="#/"><span class="icon-user"></span>Usuarios</a></li>
	           <li><a href="#/estadisticas"><span class="icon-briefcase"></span>Ventas</a></li>
	           <li><a href="#/vistaMensajes"><span class="icon-bubble"></span>Mensajes</a></li>
	           <li><a  href="#/adminLoterias"><span class="icon-cog"></span>Administrar Loterias</a></li>
	           <li><a href="#/ventas"><span class="icon-stats-dots"></span>Estadisticas</a></li>  
	    </ul>
	</nav>
	</div>
	<div class="contenido" ng-view>
		
	</div>
</body>
</html>