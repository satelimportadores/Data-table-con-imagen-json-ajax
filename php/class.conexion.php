<?php


class Conexion extends mysqli {
    
    
    public function __construct(){
        						//$db = new EasyMySQLi('host', 'user', 'pass', 'DB');						
        parent::__construct('localhost','datatablesv03','datatablesv03','datatablesv03');
        
        $this->query("SET NAMES 'utf8';");
        
        $this->connect_errno ? die('Error con la conexion') : $x = 'Conectado';
        //echo $x;
        unset ($x);
        
    }
    
}




?>