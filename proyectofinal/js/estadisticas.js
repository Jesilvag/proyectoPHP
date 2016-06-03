$(document).ready(function(){
	var nombres=[];
	var ventas=[];
var info={};
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var colores=[];
url = 'http://localhost/serviciosTuChance/api/ventas/';
datos = {};
$.getJSON(url, datos, function(response){
	info=response;
   // console.log(info);
    $.each(info, function(i,item){
           nombres.push(info[i].username);
           ventas.push(parseInt(info[i].total));
           
    });
    
    
});
console.log(nombres);
    console.log(ventas);
    console.log(colores);
var datosVentas={
	
		type:"pie",
		data:{
		datasets:[{
			label:"Ventas por empleado",
			data : ventas,
			backgroundColor:[
			"#00cc99",
			"#0066ff",
			"#ff9966",
			"#1a1aff"
			],

		}],
		labels :nombres
	},
	options :{
		responsive:true,
	}

};

var canvasUsuarios=document.getElementById('ventasUsuarios').getContext("2d");
window.pie=new Chart(canvasUsuarios,datosVentas);

});