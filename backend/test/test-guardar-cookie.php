<?php
setcookie("usuario","juan",time()+(60*60*24*31),"/");
echo "cookie enviada al cliente y guardada";

// este paramatro es para tener en seguriada el servidor
if(!isset($_SESSION["token"])){
    echo '{"mensaje":"Acceso Denegado"}';
    exit;
}if(!isset($_COOKIE["token"])){
    echo '{"mensaje":"Acceso Denegado"}';
    exit;
}if($_SESSION["token"] !=$_COOKIE["token"]){
    echo '{"mensaje":"Acceso Denegado"}';
    exit;
}

?>