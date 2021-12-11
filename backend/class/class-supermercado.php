<?php
class SuperMercado{
private $idEmpresa;
private $nombreEmpresa;
private $imagen;
private $descripcion;
private $icono;
private $productos;

public function __constructor($idEmpresa,$nombreEmpresa,$imagen,$descripcion,$icono,$productos){
    $this->idEmpresa = $idEmpresa;
    $this->nombreEmpresa = $nombreEmpresa;
    $this->imagen = $imagen;
    $this->descripcion = $descripcion;
    $this->icono = $icono;
    $this->productos = $productos;
}

public static function obtenerEmpresas($idEmpresa){
    $contenidoArchivoEmpresas = file_get_contents('../data/supermercado.json');
    $empresas = json_decode($contenidoArchivoEmpresas,true);
    for ($i=0; $i <sizeof($empresas); $i++) { 
            if($empresas[$i]["idEmpresa"]==$idEmpresa){
                    return $empresas[$i];
            }
            
    }
    return null;

    
}
public static function obtenerEmpresa(){
    return json_decode(file_get_contents('../data/supermercado.json'),true);
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

/**
 * Get the value of nombreEmpresa
 */ 
public function getNombreEmpresa()
{
return $this->nombreEmpresa;
}

/**
 * Set the value of nombreEmpresa
 *
 * @return  self
 */ 
public function setNombreEmpresa($nombreEmpresa)
{
$this->nombreEmpresa = $nombreEmpresa;

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
 * Get the value of productos
 */ 
public function getProductos()
{
return $this->productos;
}

/**
 * Set the value of productos
 *
 * @return  self
 */ 
public function setProductos($productos)
{
$this->productos = $productos;

return $this;
}
}    


?>