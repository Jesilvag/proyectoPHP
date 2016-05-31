<?php

 $app->get('/api/loterias',function() use ($app){
   $phql="SELECT * FROM loterias ORDER BY nombre";
   $loterias=$app->modelsManager->executeQuery($phql);
   $data=array();
   foreach ($loterias as $loteria ) {
   	$data[]=array(
   		'idloterias' =>$loteria->idloterias,
   		'nombre'=>$loteria->nombre     
        );
   }
   echo json_encode($data);
});

$app->post('/api/loterias',function() use ($app){
    $user=$app->request->getJsonRawBody();
    $phql="INSERT INTO loterias(idloterias,nombre) VALUES(:idloterias:,:nombre:)";
    $status=$app->modelsManager->executeQuery($phql,array(
       'idloterias'=> $user->id,
       'nombre'=>$user->nombre       
        ));
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
$app->get('/api/loterias/{id:[0-9]+}',function($id) use ($app){
  $phql="SELECT * FROM loterias WHERE idloterias LIKE :idloterias:";
  $user=$app->modelsManager->executeQuery($phql,array('idloterias'=>$id))->getFirst();
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

$app->get('/api/loteriasSeries/{id:[0-9]+}',function($id) use ($app){
   $phql="SELECT loterias.idloterias,serie.numSerie FROM loterias  INNER JOIN serie ON serie.idserie=loterias.idloterias  WHERE loterias.idloterias LIKE :idloterias: ORDER BY numSerie";
   $loterias=$app->modelsManager->executeQuery($phql,array('idloterias'=>$id));
   $data=array();
   foreach ($loterias as $loteria ) {
    $data[]=array(
      'idloterias' =>$loteria->idloterias,
      'numSerie'=>$loteria->numSerie     
        );
   }
   echo json_encode($data);
});
?>