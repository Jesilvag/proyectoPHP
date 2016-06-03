$(document).ready(function(){
url = 'http://localhost/serviciosTuChance/api/usuarios';
datos = {};
$.getJSON(url, datos, function(response){
    console.log(response);
    console.log(response[0])
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
			backgroundColor:[
			"#AB5353",
			"#AB53AB",
			"#5953AB",
			"#53A2AB"
			],

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