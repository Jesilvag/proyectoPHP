$(document).ready(function(){
var datos={
		type:"line",
		data:{
		datasets:[{
			label:"Ventas diarias",
			fill: false,
            lineTension: 0.1,
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
		"Lunes",
		"Martes",
		"Miercoles",
		"Jueves"
		]
	},
	options :{
		responsive:true,
	}

};
  
  
var cv=document.getElementById('resumenTransacciones').getContext("2d");
window.line=new Chart(cv,datos);	





});
	