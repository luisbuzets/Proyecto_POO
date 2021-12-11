<?php
class Ordenes{
   private $codigoUsuario;
   private $codigoOrden;
   private $title;
   private $precio;
   private $imagen;
   private $cantidad;

   public function __construct($codigoUsuario,$codigoOrden,$title,
   $precio,$imagen,$cantidad){
    $this->codigoUsuario = $codigoUsuario;  
    $this->codigoOrden = $codigoOrden;
    $this->title = $title;
    $this->precio = $precio;
    $this->imagen = $imagen;
    $this->cantidad = $cantidad;
   }
   public static function obtenerOrdenes($idUsuario){
   $contenidoArchivoUsuarios = file_get_contents('../data/usuarios.json');
   $usuarios = json_decode($contenidoArchivoUsuarios, true);
   $usuario = null;
   for($i=0; $i<sizeof($usuarios); $i++){
       if($usuarios[$i]["idUsuario"] == $idUsuario)
           $usuario = $usuarios[$i];
   }

   $contenidoArchivoOrdenes = file_get_contents('../data/carrito.json');
   $ordenes = json_decode($contenidoArchivoOrdenes, true);
   $usuariosOrdenes = array();
   for($i=0; $i<sizeof($ordenes);$i++){
       if(in_array($ordenes[$i]["codigoOrden"], $usuario["codigoOrdenes"]))
       $usuariosOrdenes[] = $ordenes[$i];     
   }
   echo json_encode($usuariosOrdenes);
}


 

 public function guardarOrdenes(){
   $contenidoArchivo = file_get_contents("../data/carrito.json");
   $carrito = json_decode($contenidoArchivo, true);
   $carrito[] = array(
      
                "codigoUsuario"=> $this->codigoUsuario,
                "codigoOrden"=> $this->codigoOrden,
                "title"=> $this->title,
                "precio"=> $this->precio,
                "imagen"=> $this->imagen,
                "cantidad"=> $this->cantidad
   );
   $archivo = fopen("../data/carrito.json","w");
   fwrite($archivo, json_encode($carrito));
   fclose($archivo);

   echo '{"codigoResultado":1, "mensaje":"se agrego la orden con exito"}';

}
 


   /**
    * Get the value of codigoUsuario
    */ 
   public function getcodigoUsuario()
   {
      return $this->codigoUsuario;
   }

   /**
    * Set the value of idUsuario
    *
    * @return  self
    */ 
   public function setcodigoUsuario($codigoUsuario)
   {
      $this->codigoUsuario = $codigoUsuario;

      return $this;
   }

   /**
    * Get the value of codigoOrden
    */ 
   public function getCodigoOrden()
   {
      return $this->codigoOrden;
   }

   /**
    * Set the value of codigoOrden
    *
    * @return  self
    */ 
   public function setCodigoOrden($codigoOrden)
   {
      $this->codigoOrden = $codigoOrden;

      return $this;
   }

   /**
    * Get the value of title
    */ 
   public function getTitle()
   {
      return $this->title;
   }

   /**
    * Set the value of title
    *
    * @return  self
    */ 
   public function setTitle($title)
   {
      $this->title = $title;

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
    * Get the value of cantidad
    */ 
   public function getCantidad()
   {
      return $this->cantidad;
   }

   /**
    * Set the value of cantidad
    *
    * @return  self
    */ 
   public function setCantidad($cantidad)
   {
      $this->cantidad = $cantidad;

      return $this;
   }
}


?>