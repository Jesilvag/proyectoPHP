$(document).ready(function(){
	var ventasDiarias={
		type:"bar",
		data:{
		datasets:[{
			label:"Estadisticas",
			data : [
			     24,
			     20,
			     12,
			     14,
			],
			backgroundColor:[
			"#AB5353",
			]

		}],
		labels : [
		"Luis",
		"Martha",
		"Juan",
		"Lucia",
		]
	},
	options :{
		responsive:true,
	}

};

var canvasEstadisticas=document.getElementById('tranDiarias').getContext("2d");
window.bar=new Chart(canvasEstadisticas,ventasDiarias);

});