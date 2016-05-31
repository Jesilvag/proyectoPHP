google.load('visualization','1.0',{'packages':['corechart']});
google.setOnLoadCallback(dibujar);

function dibujar(){
	var data= new google.visualization.DataTable();
	data.addColumn('string','dias');
	data.addColumn('number','ventas');
	data.addRows(
		[
		['Lunes',30],
		['Martes',24]
		]
		);
	var opciones={'title':'ventas diarias',
                   'width':500,
                   'height':300};
    var grafica= new google.visualization.PieChart(document.getElementById('grafica'));
    grafica.draw(data,opciones);
}