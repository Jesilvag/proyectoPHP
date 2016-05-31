<!DOCTYPE html>
<html ng-app="tuChanceApp" >
<head>
	<title>Opciones</title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<link rel="stylesheet" href="../css/style.css">
	<!--<script type="text/javascript" src="https://www.google.com/jsapi"></script>-->
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
		<h1>Tu chance</h1>
		<div class="menu_bar">
			<a href="#" class="btn_menu"><span class="icon-menu3"></span>Menu</a>
		</div>

	</header>
	<section class="contenidoPrincipal" >
		<div class="menu">
			<nav>
				<ul id="opciones">
					<li><a href="#/"><span class="icon-cog"></span>Apuestas</a></li>
					<li><a href="#/viewEstadisticas"><span class="icon-stats-dots"></span>Estadisticas</a></li>  
				</ul>
			</div>
			<div class="contenido" ng-view>				
			</div>
		</section>
		<footer>

		</footer>

	</body>
	</html>
