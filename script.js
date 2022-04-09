let cambiocol = 1;
const col = document.querySelectorAll('.col');

col.forEach((columna, index)=>{
    columna.addEventListener('click', function(){
        cambio(index)
        console.log(columna, index);
    })
});

function cambio(index){
    col[cambiocol].classList.remove('activo');
    col[index].classList.add('activo');
    cambiocol=index;
}