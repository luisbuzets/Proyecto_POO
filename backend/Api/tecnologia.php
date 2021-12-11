<?php
header("Content-Type: application/json");
include_once("../class/class-Tecnologia.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST': 
    break;
    case "GET":     
        if (isset($_GET['idEmpresa'])){
            echo json_encode(Tecnologia::obtenerEmpresas($_GET['idEmpresa']));
        }
        else{
            echo json_encode(Tecnologia::obtenerEmpresa());
        }
    break;
    case "PUT":
        
    break;
    case "DELETE":
        
    break;

}

?>