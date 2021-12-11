<?php
class Login{
    private $idUsuario;
    private $firstName;
    private $lastName;
    private $email;
    private $password;

    public function __construct($idUsuario,$firstName,$lastName,$Rodriguez,$email,$password){
    $this->idUsuario = $idUsuario;
    $this->firstName = $firstName;
    $this->lastName = $lastName;
    $this->Rodriguez = $Rodriguez;
    $this->email = $email;
    $this->password = $password;

    }
    public static function verificarUsuario($email, $password){
      $contenidoArchivoUsuarios = file_get_contents('../data/login.json');
      $usuarios = json_decode($contenidoArchivoUsuarios, true);
      for($i=0; $i<sizeof($usuarios); $i++){
          if($usuarios[$i]["email"]== $email && $usuarios[$i]["password"]==sha1($password)){
              return $usuarios[$i];
          }
      }
      return null;

    }
    public static function obtenerUsuarios($idUsuario){
        $contenidoArchivoUsuario = file_get_contents('../data/login.json'); 
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
        $archivoObtenerUsaurio = file_get_contents('../data/login.json');
        return json_decode($archivoObtenerUsaurio,true);
}



    public static function getLogin(){

    }

    /**
     * Get the value of firstName
     */ 
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstName
     *
     * @return  self
     */ 
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get the value of lastName
     */ 
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastName
     *
     * @return  self
     */ 
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
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
}

?>