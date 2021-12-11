<?php
header("Content-Type: application/json");
include_once("../class/class-usuarios.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST'://GUARDAR
    break;
    case "GET":  //OBTENER   
        if (isset($_GET['id'])){
            echo json_encode(Usuario::obtenerUsuarios($_GET['id']));
        }
        else{
            echo json_encode(Usuario::obtenerUsuario());
        }
    break;
    case "PUT":
        $_PUT = json_decode(file_get_contents('php://input'),true);
        Usuario::agregarOrden($_GET['id'],$_PUT);
    break;
    case "DELETE":
        //Eliminar
    break;
}
?>