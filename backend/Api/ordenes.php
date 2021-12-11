<?php
header("Content-Type: application/json");
include_once("../class/class-ordenes.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST': 
        $_POST = json_decode(file_get_contents('php://input'),true);
        $orden = new Ordenes(
        $_POST["codigoUsuario"],
        $_POST["codigoOrden"],
        $_POST["title"], 
        $_POST["precio"],$_POST["imagen"], $_POST["cantidad"]);
        $orden ->guardarOrdenes();
        json_encode($_POST);
    break;
    case "GET":     
        if(isset($_GET['idUsuario'])){// Retorna la historias de los usuarios que esta siguiendo
            Ordenes::obtenerOrdenes($_GET['idUsuario']);
      } if(isset($_GET['idOrden'])){// retornar un historia
      }else{
         
      }
    break;
    case "PUT": //Actualizar
        //Actualizar
    break;
    case "DELETE":
        //Eliminar
    break;

}

?>