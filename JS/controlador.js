/* este parametro ses para probar los click no es necesario usarlo */
/*
function seleccionMenu(id){
    console.log('mostrar', id);
document.getElementById('menu-comida').style.display = 'none';
document.getElementById('menu-supermercado').style.display = 'none';
document.getElementById('menu-medicamentos').style.display = 'none';
document.getElementById('menu-tecnologia').style.display = 'none';
document.getElementById(id).style.display ='block';
}
*/
/* este parametro es cunado el momento de dar click en allgun menu se pueda 
desaparecer todo el menu para diseñar a otra pagina*/
function mostrarDetalleMenu(){
    
    document.getElementById('menu-supermercado').style.display = 'none';
    document.getElementById('menu-medicamentos').style.display = 'none';
    document.getElementById('menu-tecnologia').style.display = 'none'; 
    document.getElementById('menu-comida').style.display ='none';
    document.getElementById('volver').style.display = 'flex';

}
/*
esta funncion es para probar un boton para regresar 
function volver(){
    document.getElementById('menu-supermercado').style.display = 'flex';
    document.getElementById('menu-medicamentos').style.display = 'flex';
    document.getElementById('menu-tecnologia').style.display = 'flex'; 
    document.getElementById('menu-comida').style.display ='flex';

}
*/