$(document).ready(function(){
	var nombres=[];
	var ventas=[];
url = 'http://localhost/serviciosTuChance/api/ventas/';
datos = {};
$.getJSON(url, datos, function(response){
    console.log(response[0].username);
    
});

var datosVentas={
		type:"pie",
		data:{
		datasets:[{
			label:"Ventas por empleado",
			data : [
			     24,
			     20,
			     12,
			     14
			],
			backgroundColor:[],

		}],
		labels : [
		"Luis",
		"Martha",
		"Juan",
		"Lucia"
		]
	},
	options :{
		responsive:true,
	}

};

var canvasUsuarios=document.getElementById('ventasUsuarios').getContext("2d");
window.pie=new Chart(canvasUsuarios,datosVentas);

});