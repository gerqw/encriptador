//front
const entrada = document.getElementById("ingreso");
const salidaAnterior = document.getElementById("posterior");
const salidaPosterior = document.getElementById("anterior");
const parrafo = document.getElementById("salidaTexto");
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const advertencia = document.getElementById('advertencia');

//funcion principal
function funcion(funcion){
    var resultado
    //verificar texto no sea vacio
    const letras = /^[a-z]+$/;
    if (!letras.test(entrada.value) || entrada.toString().trim() == 0){
        advertencia.style.color = 'red';
        return;
    }

    advertencia.style.color = 'grey';

    if(funcion.toString() == 'encriptar'){
        resultado = encriptar(entrada.value);  
    }else{
        resultado = desencriptar(entrada.value);
    }
    mostrar(resultado);
}

//funcion que encripta, hace un while en todo el texto
function encriptar(textoIngresado){
    let arrayCodigo = ["ai","imes","enter","ober","ufat"];
    let arrayLetras = ["a","i","e","o","u"];
    let textoEmcriptado='';
    let i = 0;
    //utliza el texto ingresado como un array
    while(i<=textoIngresado.length-1){
        switch (textoIngresado[i]){
            case arrayLetras[0]:
                textoEmcriptado=textoEmcriptado+arrayCodigo[0];
            break;
            case arrayLetras[1]:
                textoEmcriptado=textoEmcriptado+arrayCodigo[1];
                break;
            case arrayLetras[2]:
                    textoEmcriptado=textoEmcriptado+arrayCodigo[2];
            break;
            case arrayLetras[3]:
                textoEmcriptado=textoEmcriptado+arrayCodigo[3];
                break;
            case arrayLetras[4]:
                textoEmcriptado=textoEmcriptado+arrayCodigo[4];
                break;
            default:
                textoEmcriptado=textoEmcriptado+textoIngresado[i]
        }
        i=i+1;
    }
    return textoEmcriptado;
}

//funcion desencriptar, maneja cadenas
function desencriptar(textoIngresado){
    let arrayCodigo = ["ai","imes","enter","ober","ufat"];
    let arrayLetras = ["a","i","e","o","u"];
    i = 0;
    //bucle sobre todo el string
    while(i<=arrayLetras.length){
    //busco las variables
    buscar = arrayCodigo[i]
    remplazar = arrayLetras[i]
    //si lo encuentra agerga el codigo para encriptar
    while(textoIngresado.includes(buscar)){
        var pos = textoIngresado.search(buscar);
        textoIngresado = textoIngresado.slice(0,pos)+remplazar+textoIngresado.slice(pos+buscar.length,textoIngresado.length)
    }
    i = i+1
}
    return textoIngresado;
}

//copia al portapapeles
async function copiar(){
    try {
        await navigator.clipboard.writeText(parrafo.innerHTML);
    } catch (err) {
        alert("Error al copiar");
      }
}

//muestra el resultado
function mostrar(texto){
    salidaPosterior.style.display = "none";
    salidaAnterior.style.display = 'flex';
    parrafo.innerHTML = texto;
    entrada.value = '';
}