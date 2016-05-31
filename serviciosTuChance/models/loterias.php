<?php 

use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Message;
use Phalcon\Mvc\Model\Validator\Uniqueness;
use Phalcon\Mvc\Model\Validator\InclusionIn;
 use Phalcon\Mvc\Model\Resultset\Complex;

class loterias extends Model{

  public function validation()
  {
   return true;
  }
}
?>   