<?php
include('class.conexion.php');

//traer clientes   
          $clientes = new Conexion;
          $sql03 = "SELECT cardcode,cardname,direccion,telefono FROM tblclientes";
          $Rclientes = $clientes->query($sql03) or trigger_error($clientes->error);
//traer clientes 
          
          if (!$Rclientes) {
           Die ('Error');
          }else{
            while ($data = $Rclientes->fetch_array()) {
              $arreglo['data'][] = array_map('utf8_encode', $data);
            }
            echo json_encode($arreglo);
            //$clientes->free_result();
            $clientes->close();
          }
?>