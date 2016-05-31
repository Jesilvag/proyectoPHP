<?php
error_reporting(E_ALL);
use Phalcon\Loader;
use Phalcon\Mvc\Micro;
use Phalcon\Di\FactoryDefault;
use Phalcon\Db\Adapter\Pdo\Mysql as PdoMysql;
use Phalcon\Http\Response;

include 'DB_tuchance.php';

//Inicio de las rutas
$app->get('/api/usuarios',function() use ($app){
   $phql="SELECT * FROM usuarios ORDER BY nombre";
   $usuarios=$app->modelsManager->executeQuery($phql);
   $data=array();
   foreach ($usuarios as $user ) {
   	$data[]=array(
   		'idusuarios' =>$user->idusuarios,
   		'nombre'=>$user->nombre,
      'cedula'=>$user->cedula,
      'apellido'=>$user->apellido,
      'username'=>$user->username,
       'bloqueado'=>$user->bloqueado
        );
   }
   echo json_encode($data);
});
//Busca un usuario por nombre
$app->get('/api/usuarios/search/{nombre}',function($nombre) use ($app){
  $phql="SELECT * FROM usuarios WHERE nombre LIKE :nombre: ORDER BY nombre";
  $usuarios=$app->modelsManager->executeQuery($phql,array('nombre'=>'%'.$nombre.'%'));
  $data[]=array();
  foreach ($usuarios as $user) {
  $data[]=array(
      'idusuarios' =>$user->idusuarios,
      'nombre'=>$user->nombre); 
     
   }
   echo json_encode($data);

});
//Busca un usuario por cedula
$app->get('/api/usuarios/{id:[0-9]+}',function($id) use ($app){
  $phql="SELECT * FROM usuarios WHERE idusuarios LIKE :id:";
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
//Crea un usuario
$app->post('/api/usuarios',function() use ($app){
    $user=$app->request->getJsonRawBody();
    $phql="INSERT INTO usuarios(idusuarios,nombre,apellido,username) VALUES(:idusuarios:,:nombre:,:apellido:,:username:)";
    $status=$app->modelsManager->executeQuery($phql,array(
       'idusuarios'=> $user->id,
       'nombre'=>$user->nombre,
       'apellido'=>$user->edad,
       'username'=>$user->username
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
//Bloquear usuario
$app->put('/api/usuarios/{cedula}',function($cedula) use ($app){
      $user=$app->request->getJsonRawBody();
      $phql="UPDATE usuarios SET bloqueado=:is_bloqueado: WHERE cedula=:cedula:";
      $status=$app->modelsManager->executeQuery($phql,array(
       'cedula'=>$cedula,
       'is_bloqueado'=> $user->$is_bloqueado       
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
$app->delete('/api/usuarios/{cedula}',function($cedula) use ($app){
   $phql="DELETE FROM usuarios WHERE idusuarios=:cedula:";
   $status=$app->modelsManager->executeQuery($phql,array(
    'cedula'=>$cedula
    ));
   $response= new Response();
   if($status->success()==true){
     $response->setJsonContent(array('status'=>'OK'));
   }else{
        $response->setStatusCode(409,"Conflict");
        $errors=array();
        foreach ($status->getMessages() as $message) {
          $errors[]=$message->getMessage();
        }
        $response->setJsonContent(array(
          'status'=>'ERROR',
          'messages'=>$errors
         
          ));
   }
   return $response;
});

include 'loteria.php';
//Fin de las rutas
$app->handle();

?>