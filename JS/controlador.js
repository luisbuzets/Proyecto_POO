
function seleccionMenu(id){
    console.log('mostrar', id);
document.getElementById('menu-comida').style.display = 'none';
document.getElementById('menu-supermercado').style.display = 'none';
document.getElementById('menu-medicamentos').style.display = 'none';
document.getElementById('menu-tecnologia').style.display = 'none';
document.getElementById(id).style.display ='block';
}