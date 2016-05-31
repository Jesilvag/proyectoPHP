$(document).ready(function(){


	/*var name=window.location.pathname;
  
  if(name=='/proyectofinal/vistas/viewOpciones.php'){
  $('.contenido').load('viewApuestas.php');
}else{
	
  $('.contenido').load('usuarios.php');
}*/
	/*$('ul#opciones  li a').click(function(){
		var vista=$(this).attr('href');

		$('.contenido').load(vista+'.php');

		return false;
	});*/
      var cont=1;
    $('.menu_bar').click(function(){
           if(cont==1){
           	$('nav').animate({
           		left:'0'
           	});
           	cont=0;
           }else{
           	   cont=1;
            	$('nav').animate({
           		left:'-100%'
           	});
           }
    });
	
});