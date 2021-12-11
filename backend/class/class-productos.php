<?php

class Productos{
    private $idEmpresa;
    private $idProducto;
    private $nombreProducto;
    private $descripcion;
    private $imagen;
    private $icono;
    private $precio;


    public function __construct($idEmpresa,$idProducto,$nombreProducto,$descripcion,$imagen,$icono,$precio){
        $this->idEmpresa = $idEmpresa;
        $this->idProducto = $idProducto;
        $this->nombreProducto = $nombreProducto;
        $this->descripcion = $descripcion;
        $this->imagen = $imagen;
        $this->icono = $icono;
        $this->precio = $precio;
        
    }
    public static function obtenerProductos($idUsuario){
        $contenidoArchivo = file_get_contents('../data/empresa.json');
        $empresas = json_decode($contenidoArchivo, true);
        $empresa = null;
        for($i=0; $i<sizeof($empresas);$i++){
            if($empresas[$i]["idEmpresa"]==$idUsuario){
                $empresa = $empresas[$i];
                break;
            }
        }
        $contenidoArchivoProductos = file_get_contents('../data/productos.json');
    $productos = json_decode($contenidoArchivoProductos , true);
    $resulProducto = array();
    for($i=0; $i<sizeof($productos);$i++){
     if( in_array($productos[$i]["idEmpresa"], $empresa["productos"])){
        $resulProducto[] = $productos[$i];
       } 
    }
    echo json_encode($resulProducto);
}


    /**
     * Get the value of id
     */ 
    public function getIdProducto()
    {
        return $this->idProducto;
    }

    /**
     * Set the value of idProducto
     *
     * @return  self
     */ 
    public function setIdProducto($idProducto)
    {
        $this->idProducto = $idProducto;

        return $this;
    }

    /**
     * Get the value of nombreProducto
     */ 
    public function getNombreProducto()
    {
        return $this->nombreProducto;
    }

    /**
     * Set the value of nombreProducto
     *
     * @return  self
     */ 
    public function setNombreProducto($nombreProducto)
    {
        $this->nombreProducto = $nombreProducto;

        return $this;
    }

    /**
     * Get the value of descripcion
     */ 
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */ 
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get the value of imagen
     */ 
    public function getImagen()
    {
        return $this->imagen;
    }

    /**
     * Set the value of imagen
     *
     * @return  self
     */ 
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;

        return $this;
    }

    /**
     * Get the value of icono
     */ 
    public function getIcono()
    {
        return $this->icono;
    }

    /**
     * Set the value of icono
     *
     * @return  self
     */ 
    public function setIcono($icono)
    {
        $this->icono = $icono;

        return $this;
    }

    /**
     * Get the value of precio
     */ 
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set the value of precio
     *
     * @return  self
     */ 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }
    

    /**
     * Get the value of idEmpresa
     */ 
    public function getIdEmpresa()
    {
        return $this->idEmpresa;
    }

    /**
     * Set the value of idEmpresa
     *
     * @return  self
     */ 
    public function setIdEmpresa($idEmpresa)
    {
        $this->idEmpresa = $idEmpresa;

        return $this;
    }
}


?>