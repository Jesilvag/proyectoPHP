<?php 

use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Message;
use Phalcon\Mvc\Model\Validator\Uniqueness;
use Phalcon\Mvc\Model\Validator\InclusionIn;

class numbloqueados extends Model{

  public function validation()
  {
   return true;
  }
}
?> 