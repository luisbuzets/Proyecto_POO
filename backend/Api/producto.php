<?php
header("content-Type: application/json");
include_once("../class/class-productos.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST'://GUARDAR
    case 'GET':
        if(isset($_GET['idUsuario'])){
              Productos::obtenerProductos($_GET['idUsuario']);
        } if(isset($_GET['idProducto'])){
        }else{
           
        }
        break;
    case 'PUT':
        //ACTUALIZAR
        break;
    case 'DELETE':
       //ELIMINAR
        break;        
}





?>