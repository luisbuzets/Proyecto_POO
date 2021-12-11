<?php
header("Content-Type: application/json");
include_once("../class/class-empresa.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST': 
    break;
    case "GET":     
        if (isset($_GET['idUsuario'])){
            echo json_encode(Empresa::obtenerEmpresas($_GET['idUsuario']));
        }
        else{
            echo json_encode(Empresa::obtenerEmpresa());
        }
    break;
    case "PUT":
        
    break;
    case "DELETE":
        
    break;

}

?>