<?php
header("Content-Type: application/json");
include_once("../class/class-medicamentos.php");
switch($_SERVER['REQUEST_METHOD']){
    case 'POST': 
    break;
    case "GET":     
        if (isset($_GET['idEmpresa'])){
            echo json_encode(Medicamentos::obtenerEmpresas($_GET['idEmpresa']));
        }
        else{
            echo json_encode(Medicamentos::obtenerEmpresa());
        }
    break;
    case "PUT":
        
    break;
    case "DELETE":
        
    break;

}

?>