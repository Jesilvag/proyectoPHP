<?php

use Phalcon\Http\Response;
 $app->get('/api/apuestas',function() use ($app){
   $phql="SELECT * FROM apuestas ORDER BY nombre";
   $apuestas=$app->modelsManager->executeQuery($phql);
   $data=array();
   foreach ($apuestas as $loteria ) {
   	$data[]=array(
   		'idapuestas' =>$loteria->idapuestas,
   		'nombre'=>$loteria->nombre     
        );
   }
   echo json_encode($data);
});

$app->post('/api/apuestas',function() use ($app){
    $apuesta=$app->request->getJsonRawBody();
    print_r($apuesta);
    $fecha=localtime();
    for ($i=0; $i <count($apuesta); $i++) { 
          $phql="INSERT INTO apuestas(valor_apuesta,valor_premio,fecha,numero,serie,loteria,usuarios_idusuarios) VALUES(:valor_apuesta:,:valor_premio:,:fecha:,:numero:,:serie:,:loteria:,:usuario:)";

        $status=$app->modelsManager->executeQuery($phql,array(
       'valor_apuesta'=>$apuesta[$i]->valorApuesta,
       'valor_premio'=>$apuesta[$i]->premio,
       'fecha'=>$fecha,
       'numero'=>$apuesta[$i]->numeroApuesta,
       'serie'=>$apuesta[$i]->serie,
       'loteria'=>$apuesta[$i]->loteria->idloterias,
        'usuario'=>$apuesta[$i]->usuario    
        )); 
      }  

       
      $response= new Response();
      if ($status->success()==true) {
        $response->setJsonContent(array('status'=>'OK'));
      } else {
        $response->setStatusCode(409,"Conflict");
        $errors=array();
        foreach ($status->getMessages() as $message ) {
          $errors[]=$message->getMessage();
        }
        $response->setJsonContent(
          array(
             'status'=>'ERROR',
             'messages'=>$errors

            )
          );
      }
     return $response; 

});
$app->get('/api/apuestas/{id:[0-9]+}',function($id) use ($app){
  $phql="SELECT * FROM apuestas WHERE idapuestas LIKE :idapuestas:";
  $user=$app->modelsManager->executeQuery($phql,array('id'=>$id))->getFirst();
  $response= new Response();
  if($user==false){
    $response->setJsonContent(
      array('status'=>'NOT-FOUND')
      );
  }else{
    $response->setJsonContent(
      array('status'=>'FOUND',
          'data'=>array(
             'id' =>$user->id,
             'nombre'=>$user->nombre
             )
            )
      );
    
  }
   return $response;

});


?>