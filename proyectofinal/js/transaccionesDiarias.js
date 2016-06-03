$(document).ready(function(){
	var nombres=[];
	var apuestas=[];
	var premios=[];
var info={};

url = 'http://localhost/serviciosTuChance/api/ventasloterias';
datos = {};
$.getJSON(url, datos, function(response){
	info=response;
    console.log(info);
    $.each(info, function(i,item){
           nombres.push(info[i].nombre);
           apuestas.push(parseInt(info[i].totalApuestas));
           premios.push(parseInt(info[i].totalPremios));

           
    });
    console.log(nombres);
    console.log(apuestas);
    console.log(premios);
    
});
	var ventasDiarias={
		type:"bar",
		data:{
		datasets:[{
			label: "Total Apuestas",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            data:apuestas

		},
		{
			label:"Total Premios Loterias",
			backgroundColor: 'rgba(128,164,237, 0.8)',
            borderColor: 'rgba(128,164,237, 1)',
            data : premios

		}],
		labels : nombres
	},
	options :{
		responsive:true,
		 scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        
	},
	        scaleOverride:true,
            scaleSteps:10000,
            scaleStartValue:0,
            scaleStepWidth:2,
        }
};
/*function renderChart (dataset) {
    let ctx = document.getElementById('tranDiarias')
    let barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataset.map((el) => el.nombre),
        datasets: [{
          label: 'life expectancy (years)',
          backgroundColor: 'rgba(128,164,237, 0.8)',
          borderColor: 'rgba(128,164,237, 1)',
          data: dataset.map((el) => el.totalApuestas)
        }]
      },
      options: {
        onClick: responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
    });
renderChart(info);*/
var canvasEstadisticas=document.getElementById('tranDiarias').getContext("2d");
window.bar=new Chart(canvasEstadisticas,ventasDiarias);

});