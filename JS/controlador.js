
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
    document.getElementById('empresa-1').style.display = 'none';
    document.getElementById('empresa-2').style.display = 'none';
    document.getElementById('productos-comida').style.display = 'flex';

}
function abrirCarrito(){
    document.getElementById('empresa-1').style.display = 'none';
    document.getElementById('empresa-2').style.display = 'none';
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
    card.addEventListener('click', addToCarritoItem)
})
function addToCarritoItem(e){
    const boton = e.target
    const item =boton.closest('.card')
    console.log(item);
    const itemTitle = item.querySelector('.card-titulo').textContent;
    console.log(itemTitle);
    const itemPrecio = item.querySelector('.precio').textContent;
    console.log(itemPrecio);
    const itemImg = item.querySelector('.card-img').src;
    console.log(itemImg);
    const newItem ={
        title: itemTitle,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem);
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
           // console.log(carrito)
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
        const Content = `
        <tr>
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
      </tr> `
        tr.innerHTML = Content;
        tcuerpo.append(tr);
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito);
        tr.querySelector(".elemento-Input").addEventListener('change', sumaCantidad)
    })
    carritoTotal()
   // console.log(carrito)
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
    

    
