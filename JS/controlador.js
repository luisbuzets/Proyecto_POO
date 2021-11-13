
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
    document.getElementById('lista-carrito').style.display ='flex'

}

const Clickbutton  = document.querySelectorAll('.boton')
let carrito =[]
const cuerpo = document.querySelector('.cuerpo')
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
    
    carrito.push(newItem);
    renderCarrito()

}

function renderCarrito(){
    cuerpo.innerHTML = ''
    carrito.map(item =>{
        const tr =document.createElement('tr');
        tr.classList.add('ItemCarrito');
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
          <input  type="number" nim="1" value=${item.cantidad}>
        </td>
      </tr> 
        
        
        `
        tr.innerHTML = Content;
        cuerpo.append(tr);
    })
    console.log(carrito)
}
