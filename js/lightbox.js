const imagenes =document.querySelectorAll('.img-galeria')
const imagenlight = document.querySelectorAll('.agregar-imagen ')
const contenedorlight = document.querySelector('.imagen-light')


imagenes.forEach(imagenes=>{
    imagenes.addEventListener('click',()=>{
        aparecerimagen(imagenes.getAttribute(' src'))
    })

})

const aparecerimagen=(imagenes)=>{
    imagenlight.src=imagenes;
    contenedorlight.classList.toggle('show')
    imagenlight.classList.toggle('showimagenes')
}

    

    



    

        

    
        




