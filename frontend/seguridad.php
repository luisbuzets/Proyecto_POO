<?php
session_start();
if(!isset($_SESSION["token"])){
    header("Location:  Registro.html");
    
}
if(!isset($_COOKIE["token"])){
    header("Location:  Registro.html");
    
}
if($_SESSION["token"] !=$_COOKIE["token"]){
    header("Location:  Registro.html");
    
}

// probar como enlazar el archivo seguridad a los html
?>