<?php

include 'seguridad.php'

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/df25df16a0.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="All.CSS/Menus.css"> 
    <title>MENU</title>
    <link rel="shortcut icon" href="img/iconos/icono-32x32.png">
</head>
<body>

        <nav class="navbar navbar-light bg-light" style="margin: 8px;">
            <div class="container-fluid d-flex"  >
              <div class="logo-app">
                <img class="logo" src="img/iconos/flash.png" alt="">
              </div>
    
               <div class="notificacion" id="alerta">
                <i class="far fa-bell "onclick="mostrarAlertas()"></i>      
              </div>
              <div class="notificacion" id="carrito">
                <i class="fas fa-shopping-cart" onclick="abrirCarrito()"></i>
              </div>
              <form >
                <div class="perfil d-flex justify-content-between">
                  <i  class="fas fa-user-circle " data-bs-toggle="modal" data-bs-target="#exampleModal"><h3 id="texto-hola"></h3></i>
                  <a href="logout.php" ><i  class="fas fa-power-off" style="color: red;"></i>
                  </a> 
                </div>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              </form>
            </div>
          </nav>
      </nav>
      <div class="alert alert-primary position-static top-0 momento" role="alert">
        !Su Producto se Añadio al Carrito!
      </div>

      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" >
        seleccione el Usuarios
        <select id="usuarioActual" class="form-control mr-2 "   onchange="cambiarUsuario()">
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
        <!--<button type="button" class="btn btn-secondary p-2"  onchange="cambiarUsuario()">Aceptar</button>-->
      </div>
    </div>
  </div>
</div>

      <div class="container">
        <div class="row">
          
          <div class="col-6">
            <div class="tarjeta" style="width: 2rem;">
              <div class="menu " id="menu-comida" onclick="mostrarComida()">
                <img src="img/bg/Fast food_Flatline.png" alt="" style="width:100%">
                <h5 class="card-title">comidas</h5>
              </div>
            </div>
          </div>
      

         <div class="col-6">
          <div class="tarjeta" style="width: 2rem;" >
            <div class="menu-2" id="menu-supermercado" onclick="mostrarSupermercado()" >
              <img src="img/bg/Shopping cart_Outline.png" alt="" style="width:100%">
              <h5 class="card-title">Supermercado</h5>
            </div>
          </div>
         </div>
         
         <div class="col-6">
          <div class="tarjeta" style="width: 2rem;" >
            <div class="menu-3"id="menu-medicamentos" onclick="mostrarMedicamentos()" >
              <img src="img/bg/Doctor_Isometric.png" alt="" style="width:100%">
              <h5 class="card-title">Mediamentos</h5>
            </div>
          </div>
         </div>

         <div class="col-6">
          <div class="tarjeta" style="width: 2rem;">
            <div class="menu-4" id="menu-tecnologia"onclick="mostrarTecnologia()">
              <img src="img/bg/Iphone_Flatline.png" alt="" style="width:100%">
              <h5 class="card-title">Tecnologia</h5>
            </div>
          </div>
        </div>

      </div><br><br>
      <!-- El main es donde  hara  la funcionalidad-->

      <main>
       
        <div id="detalle-comida" class="row" >
          <!---->   
        </div>   
        <!--SUPERMERCADO-->
        <div id="detalle-supermercado" class="row">
          <!---->
        </div>
        <!--MEDICAMENTOS-->
        <div id="detalle-medicamentos" class="row">
          <!--               -->
        </div>
        <!--TECNOLOGIA-->
        <div id="detalle-tecnologia" class="row">
          <!--               -->
        </div>
        <!-- Los Productos-->
        <div  id="productos-comida" class="row">
        <div class="card m-3 ">
    <h4 class="card-titulo">Pizza Peperoni 1</h4>
    <div class="producto-contenido">
      <div class="productos">
        <img src="img/menu/pizzahut.jpg" class="card-img" alt="">
      </div>
      <div class="card-text">
        <p1>pizza Peperoni para 8 personas</p1>
        <i class="fas fa-cart-arrow-down boton"></i>
      </div> 
    </div>
    <td class="precio-card p-2">
      <h7 class="text-dark">Precio:<span class="precio">L. 100.00</span></h7>
    </td>
   </div>
         
          
        </div>
        <div  id="productos" class="row">

        </div>
        

      </main><br>

      <table  id="lista-carrito"  class="table align-middle ">
        <tbody id="tbody" class="">
          
        </tbody>
      </table>
      <br><br>
      <div  id="botonPago"style="" class="pagar">
        <div class=" row mx-4 ">
          <div class="col">
            <h3 class="itemCartTotal">Total: 0</h3>
          </div>  
          <button class="btn btn-success" onclick="desplegarTarjeta()">Pagar</button>
        </div>
        <div class="col d-flex justify-content-end">
          
        </div>
      </div>
      </div>
      <!-- Este es el formulario de la tarjeta-->
      <div class="contenedor" id="ocultar">
          <section class="logo-tarjeta">
            <div class="delantera">
              <img src="img/menu/tarjeta-logo.png" alt="">

            </div>
            
          </section>
          
        <form action="" id="formulario-tarjeta" class="formulario-tarjeta">
          <div class="grupo">
            <label for="inputNumero">Número Tarjeta</label>
            <input type="text" id="inputNumero" maxlength="19" autocomplete="off">
          </div>
          <div class="grupo">
            <label for="inputNombre">Nombre</label>
            <input type="text" id="inputNombre" maxlength="19" autocomplete="off">
          </div>
          <div class="flexbox">
            <div class="grupo expira">
              <label for="selectMes">Expiracion</label>
              <div class="flexbox">
                <div class="grupo-select">
                  <select name="mes" id="selectMes">
                    <option disabled selected>Mes</option>
                  </select>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="grupo-select">
                  <select name="year" id="selectYear">
                    <option disabled selected>Año</option>
                  </select>
                  <i class="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
    
            <div class="grupo ccv">
              <label for="inputCCV">CCV</label>
              <input type="text" id="inputCCV" maxlength="3">
            </div>
          </div>
          <button type="submit" class="btn-enviar">Finalizar Orden</button>
        </form>
      </div>
    <script src="JS/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="JS/controlador.js"></script>
</body>
</html>