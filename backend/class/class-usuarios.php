<?php
class Usuario{
    private $idUsuario;
    private $nombre;
    private $apellido;
    private $ordenes;
    

    public function __construct($idUsuario,$nombre,$apellido,$ordenes){
        $this->idUsuario = $idUsuario;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->ordenes = $ordenes;

    }
    public static function obtenerUsuarios($idUsuario){
        $contenidoArchivoUsuario = file_get_contents('../data/usuarios.json'); 
        $usuarios = json_decode($contenidoArchivoUsuario,true);
        $usuarioSeleccionado = null;
        for($i=0; $i< sizeof($usuarios);$i++){
            if($usuarios[$i]['idUsuario'] == $idUsuario){
                $usuarioSeleccionado = $usuarios[$i];
                return $usuarioSeleccionado;
            }
        }
        return null;

    }
    
    public static function obtenerUsuario(){
        $archivoObtenerUsaurio = file_get_contents('../data/usuarios.json');
        return json_decode($archivoObtenerUsaurio,true);
}



public static function agregarOrden($idUsuario,$orden){
    $contenidoOrdenUsuario = file_get_contents('../data/usuarios.json');
    $usuarios = json_decode($contenidoOrdenUsuario,true);
    for ($i=0; $i < sizeof($usuarios); $i++) { 
            if($usuarios[$i]['idUsuario']==$idUsuario){
                    $usuarios[$i]['ordenes'][] = $orden;

                    $archivo = fopen('../data/usuarios.json',"w");
                    fwrite($archivo,json_encode($usuarios));
                    fclose($archivo);
                    return true;
            }
    }

}

    /**
     * Get the value of idUsuario
     */ 
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * Set the value of idUsuario
     *
     * @return  self
     */ 
    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of ordenes
     */ 
    public function getOrdenes()
    {
        return $this->ordenes;
    }

    /**
     * Set the value of ordenes
     *
     * @return  self
     */ 
    public function setOrdenes($ordenes)
    {
        $this->ordenes = $ordenes;

        return $this;
    }

    /**
     * Get the value of apellido
     */ 
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * Set the value of apellido
     *
     * @return  self
     */ 
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }
}
?>