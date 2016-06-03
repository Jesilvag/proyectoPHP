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
   $phql="SELECT * FROM usuarios WHERE administrador=:admin: ORDER BY nombre";
   $usuarios=$app->modelsManager->executeQuery($phql,array('admin'=>0));
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
//Busca un usuario por username
$app->get('/api/usuarios/autenticar/{usuario}',function($usuario) use ($app){
 
  $userJ=json_decode($usuario,true);
  $phql="SELECT idusuarios,username,bloqueado,administrador FROM usuarios WHERE username=:username: AND password=:password:";
   $usuarios=$app->modelsManager->executeQuery($phql,array(
    'username'=>$userJ['username'],
    'password'=>sha1($userJ['password'])));
   $data=array();
   foreach ($usuarios as $user ) {
    $data[]=array(
      'idusuarios' =>$user->idusuarios,
      'username'=>$user->username,      
      'bloqueado'=>$user->bloqueado,
      'administrador'=>$user->administrador
       
        );
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
    print_r($user);
    $pass=$user->password;
    $phql="INSERT INTO usuarios(cedula,nombre,apellido,username,bloqueado,administrador,password) 
                        VALUES(:cedula:,:nombre:,:apellido:,:username:,:bloqueado:,:administrador:,:password:)";
    $status=$app->modelsManager->executeQuery($phql,array(
       'cedula'=> $user->cedula,
       'nombre'=>$user->nombre,
       'apellido'=>$user->apellido,
       'username'=>$user->username,
       'bloqueado'=>$user->habilitado,
       'administrador'=>$user->administrador,
       'password'=>sha1($pass)
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
$app->put('/api/usuarios/{username}',function($username) use ($app){
  print_r($username);
      $usuario=$app->request->getJsonRawBody();
      $phql="UPDATE usuarios SET bloqueado=:bloqueado: WHERE username=:username:";
      $status=$app->modelsManager->executeQuery($phql,array(
       'username'=>$usuario->username,
       'bloqueado'=> 1      
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
include 'apuestas.php';
//Fin de las rutas
$app->handle();

?>