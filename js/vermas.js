//boton de ocultar texto
function muestraOculta(id){
    //funcion y parametro del selector para ocultar o mostrar
    let div = document.getElementById(id);
    //uso el if para saber si se esta mostrando o no
    if(div.style.display === "none" || div.style.display === ""){
        div.style.display = "inline";
    } else{
        div.style.display = "none";
    }
}

