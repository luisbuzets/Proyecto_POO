var usuarioSeleccionado ='';
var empresaSeleccionada = '';
var idUsuario = '';

function obtenerUsuario(){

  axios({
    url:'../backend/Api/Login.php',
    method:'GET',
    reponseType:'json',
    
}).then(res=>{
    console.log('usuarioActual',res);


    document.getElementById('usuarioActual').innerHTML =''
    let usuario = res.data;
    for(let i=0; i<usuario.length; i++){
        document.getElementById('usuarioActual').innerHTML +=
        `<option style="width: 200"; value="${ i }">${usuario[i].firstName} ${usuario[i].lastName}</option>`;
    }
    document.getElementById('usuarioActual').value = null;
}).catch(error=>{
    console.error(error);
});

}
obtenerUsuario();

function cambiarUsuario () {
  usuarioSeleccionado = parseInt(document.querySelector('#usuarioActual').value);
 console.log(usuarioSeleccionado);
 axios({
     method: 'GET',
     url: `../backend/Api/login.php?id=${usuarioSeleccionado+1}`,
     responseType: 'json'
 }).then(res=>{
   
     console.log(res);
     document.getElementById('texto-hola').innerHTML = `${res.data.firstName} ${res.data.lastName}`;
 }).catch(error=>{
 console.error(error);
 });
 
}

function mostrarComida(){                             
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('alerta').style.display ='none';
    document.getElementById('detalle-comida').style.display = 'flex';
    document.getElementById('carrito').style.display = 'flex';
    
}
function mostrarSupermercado(){
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('alerta').style.display ='none';
    document.getElementById('detalle-supermercado').style.display = 'flex';
    document.getElementById('carrito').style.display = 'flex';

}
function mostrarMedicamentos(){
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('alerta').style.display ='none';
    document.getElementById('detalle-medicamentos').style.display = 'flex';
    document.getElementById('carrito').style.display = 'flex';

}
function mostrarTecnologia(){
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('alerta').style.display ='none';
    document.getElementById('detalle-tecnologia').style.display ='flex'
    document.getElementById('carrito').style.display = 'flex';
}
function mostrarAlertas(){
    document.getElementById('carrito').style.display = 'none';
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('alerta').style.display ='flex';
    document.getElementById('lista-carrito').style.display = 'none';


}
function seleccionEmpresa(){
   document.getElementById('detalle-comida').style.display = 'none';
    document.getElementById('productos-comida').style.display = 'flex';

}
function seleccionSuperMercado(){
  document.getElementById('detalle-supermercado').style.display = 'none';
    document.getElementById('productos').style.display = 'flex';

}
function medicamentos(){
  document.getElementById('detalle-medicamentos').style.display = 'none';
    document.getElementById('productos').style.display = 'flex';

}
function tecnologia(){
  document.getElementById('detalle-tecnologia').style.display = 'none';
    document.getElementById('productos').style.display = 'flex';

}
function abrirCarrito(){
    document.getElementById('detalle-comida').style.display = 'none';
   // document.getElementById('empresa-2').style.display = 'none';
    document.getElementById('productos-comida').style.display = 'none';
    document.getElementById('botonPago').style.display ='flex';
    document.getElementById('lista-carrito').style.display ='flex';

}
function desplegarTarjeta(){
    document.getElementById('lista-carrito').style.display ='none';
    document.getElementById('ocultar').style.display ='flex';
}
/* funcionalida del carrito  */
const Clickbutton  = document.querySelectorAll('.boton')
let carrito =[]
const tcuerpo = document.querySelector('tbody')
Clickbutton.forEach(card =>{
    card.addEventListener('click',addToCarritoItem)
})
 function addToCarritoItem(e){
   
    const boton = e.target
    const item = boton.closest('.card')
   // console.log(item);
    const itemTitle = item.querySelector('.card-titulo').textContent;
   // console.log(itemTitle);
    const itemPrecio = item.querySelector('.precio').textContent;
   // console.log(itemPrecio);
    const itemImg = item.querySelector('.card-img').src;
   // console.log(itemImg);
    const newItem ={
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
        
    }
    

    addItemCarrito(newItem);   
    
}
cargarProductos();

function cargarProductos(id){
    //empresaSeleccionada = id 
    axios({
        url:`../backend/Api/producto.php?idUsuario=1`,
        method:'GET',
        reponseType:'json',
        params:{
        ///  idUsuario = id
        }
        
    }).then(res=>{
    console.log("productos",res)
    
        let productos = res.data;
        document.getElementById('productos').innerHTML=''; 
        for(let i=0; i<productos.length; i++){
        document.getElementById('productos').innerHTML +=
        `<div class="card m-3 ">
        <h4 class="card-titulo">${productos[i].nombreProducto}</h4>
        <div class="producto-contenido">
          <div class="productos">
            <img src="${productos[i].imagen}" class="card-img" alt="">
          </div>
          <div class="card-text">
            <p1>${productos[i].descripcion}</p1>
            <i class="fas fa-cart-arrow-down boton"></i>
          </div> 
        </div>
        <td class="precio-card p-2">
          <h7 class="text-dark">Precio:<span class="precio">${productos[i].precio}</span></h7>
        </td>
      </div>`;
      document.getElementById('productos').value=null;
    }

    }).catch(error=>{
        console.log(error);

    });
    
}


function addItemCarrito(newItem){
    const alert = document.querySelector('.alert');
    setTimeout(function(){
        alert.classList.add('momento');
    },2000)
    alert.classList.remove('momento');
    const inputElemento = tcuerpo.getElementsByClassName('elemento-Input')
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i];
            inputValue.value ++;
            console.log(carrito)
            carritoTotal()
            
            return null;
        }
    }
    
    carrito.push(newItem);
    renderCarrito()
   

}

function renderCarrito(){
    
    tcuerpo.innerHTML = ''
    carrito.map(item =>{
        const tr =document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = 
        `<tr>
        <th scope="row">1</th>
        <td class="table-productos">
          <h6 class="title">${item.title}</h6>
        <img src=${item.img} alt="">
      </td>
        <td class="table-precio p-2"><p>${item.precio}</p></td>
        <td class="table-cantidad p-2">
          <button type="button" class="delete btn-close"></button>
          <input class="elemento-Input" type="number" nim="1" value=${item.cantidad}>
        </td>
      </tr> `;
        tr.innerHTML = Content;
        tcuerpo.append(tr);
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito);
        tr.querySelector(".elemento-Input").addEventListener('change', sumaCantidad)
    })
  
    carritoTotal()
   // console.log(carrito)
   cargarProductos()
   
}
function carritoTotal(){
    let Total = 0;
    const itemCartTotal =document.querySelector('.itemCartTotal');
    carrito.forEach((item)=>{
        const precio = Number(item.precio.replace("L.", ''))
        Total = Total + precio*item.cantidad;
    })
    itemCartTotal.innerHTML = `Total L.${Total}`;
    addLocalStorage()
}
function removeItemCarrito(e){
    const btnEliminar =e.target;
    const tr = btnEliminar.closest(".ItemCarrito");
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length; i++){

        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i,1)
        }
    }
    tr.remove();
    carritoTotal()
}
function sumaCantidad(e){
    const sumaInput = e.target;
    const tr = sumaInput.closest(".ItemCarrito");
    const title =tr.querySelector('.title').textContent;
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
  //  console.log(carrito)

}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))


}
window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}
/*-------------- funcionalida de la tarjeta */
const formulario = document.querySelector('#formulario-tarjeta');
      
    for(let i = 1; i <= 12; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);
    } 
    const yearActual = new Date().getFullYear();
    for(let i = yearActual; i <= yearActual + 8; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion);
    }
    formulario.inputNumero.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
        formulario.inputNumero.value = valorInput
        .replace(/\s/g, '')
        .replace(/\D/g, '')
        .replace(/([0-9]{4})/g, '$1 ')
        .trim();
    
    });
    formulario.inputNombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
        formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');

    });


function obtenerEmpresa(id){
        axios({

            url:'../backend/Api/empresas.php',
            method:'get',
            responseType: 'json',
            params: {
                idUsuario: id
            }
        }).then(res=>{

            console.log(res);
            let comidas = res.data;
            document.getElementById('detalle-comida').innerHTML=''
            for(let i=0; i<comidas.length; i++){
                document.getElementById('detalle-comida').innerHTML +=
                `<div class="card m-3" id="" onclick="seleccionEmpresa('${comidas[i].id}')">
                <div class="card-content">
                  <div class="card-imagen">
                    <img src="${comidas[i].imagen}" alt="">
                  </div>
                  <div class="estrella">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="card-text">
                    <h4>${comidas[i].nombreEmpresa}</h4>
                    <p>${comidas[i].descripcion}</p>
                  </div>
                </div>
              </div>`;

            }
            document.getElementById('detalle-comida').value=null;

        }).catch(err=>{
            console.error(err);
        });
    }
obtenerEmpresa();

function obtenerSuperMercado(id){
    axios({
        url:'../backend/Api/supermercado.php',
        method:'get',
        responseType: 'json',
        paramas:{
          idEmpresa: id
        }
    }).then(res=>{
        console.log(res);
        document.getElementById('detalle-supermercado').innerHTML=''
        let supermercado = res.data;
        for(let i=0; i<supermercado.length; i++){

            document.getElementById('detalle-supermercado').innerHTML +=
            `<div class="card m-3" onclick="seleccionSuperMercado('${supermercado[i].id}')">
            <div class="card-content">
              <div class="walmart-img">
                <img src="${supermercado[i].imagen}" alt="">
              </div>
              <div class="estrella">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="card-text">
                <h4>${supermercado[i].nombreEmpresa}</h4>
                <p>${supermercado[i].descripcion}</p>
              </div>
            </div>
          </div>`;

        }
        document.getElementById('detalle-supermercado').value=null;

    }).catch(err=>{
        console.error(err);
    });
}
obtenerSuperMercado();

obtenerEmpresa();

function obtenerMedicamento(id){
  
    axios({
        url:'../backend/Api/medicamento.php',
        method:'get',
        responseType: 'json',
        paramas:{
          idEmpresa: id
        }
    }).then(res=>{
        console.log(res);
        document.getElementById('detalle-medicamentos').innerHTML=''
        let medicamentos= res.data;
        for(let i=0; i<medicamentos.length; i++){
            document.getElementById('detalle-medicamentos').innerHTML +=
            `<div class="card m-3" onclick="medicamentos('${medicamentos[i].id}')">
            <div class="card-content">
              <div class="colonia-img">
                <img src="${medicamentos[i].imagen}" alt="">
              </div>
              <div class="estrella">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="card-text">
                <h4>${medicamentos[i].nombreEmpresa}</h4>
                <p>${medicamentos[i].descripcion}</p>
              </div>
            </div>
          </div>`;

        }
       // document.getElementById('detalle-medicamentos').value=null;

    }).catch(err=>{
        console.error(err);
    });
}
obtenerMedicamento();

function obtenerTecnologia(id){
    axios({
        url:'../backend/Api/tecnologia.php',
        method:'get',
        responseType: 'json',
        paramas:{
          idUsuario: id
        }
    }).then(res=>{
        console.log(res);
        document.getElementById('detalle-tecnologia').innerHTML=''
        let tecnologia = res.data;
        for(let i=0; i<tecnologia.length; i++){
            document.getElementById('detalle-tecnologia').innerHTML +=
            `<div class="card m-3" onclick="tecnologia('${tecnologia[i].id}')">
            <div class="card-content">
              <div class="colonia-img">
                <img src="${tecnologia[i].imagen}" alt="">
              </div>
              <div class="estrella">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="card-text">
                <h4>${tecnologia[i].nombreEmpresa}</h4>
                <p>${tecnologia[i].descripcion}</p>
              </div>
            </div>
          </div>`;

        }
        document.getElementById('detalle-tecnologia').value=null;

    }).catch(err=>{
        console.error(err);
    });
}
obtenerTecnologia();

