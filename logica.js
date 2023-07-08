const nombre = document.querySelector("[date-nombre]");
const agregar = document.querySelector("[date-agregar]");
const eliminar = document.querySelector("[date-eliminar");
const lista = document.querySelector("[date-lista]");
let lista_nombres = [];


function letras(texto) {
  numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (i in texto) {
    if (texto[i] in numeros) {
      return false;
    }
  }
  return true;
}

function agregar_alumno(campo, lista) {
  bandera = letras(campo.value);
  let alumno = campo.value
  if (campo.value != "" && bandera === true) {
      lista.innerHTML += "<p>"+ `${alumno}` +"</p>"
    
    
    lista_nombres.push(campo.value);
  }
  campo.value = ""
}

function eliminar_alumno(campo, lista) {
  bandera = letras(campo.value);
  let p = document.querySelectorAll("p");

  if (campo.value != "" && bandera === true) {
    text = campo.value;

    encontrados = lista_nombres.filter((e) => e === text)

    for(i = 0; i < p.length; i++){
      if(encontrados[i] == p[i].innerHTML){
        lista.removeChild(p[i])
      }
      

    }
   
  }
  campo.value = ""
}
function error(campo, bandera) {
  if (campo.value == "" || bandera == false) {
    campo.style.border = "1.2px solid red";
    campo.style.boxShadow = "0.2px 0.5px 15px red, -0.2px -0.5px 15px red";
  }
}
function validacion() {
  let bandera = letras(nombre.value);
  if (nombre.value != "") {
    if (bandera === true) {
      nombre.style.border = "0.2px solid rgb(134, 247, 43)";
      nombre.style.boxShadow =
        "0.2px  0.5px 15px rgb(134, 247, 43) , -0.2px  -0.5px 15px rgb(134, 247, 43)";
    } else {
      error(nombre, bandera);
    }
  } else {
    if (nombre.style.border != "1.2px solid red") {
      nombre.style.border = "1px ridge rgb(105, 101, 199)";
      nombre.style.boxShadow =
        "0.2px 0.5px 15px rgb(105, 101, 199),-0.2px -0.5px 15px rgb(105, 101, 199)";
    }
  }
}

agregar.addEventListener("click", (e) => {
  e.preventDefault();
  agregar_alumno(nombre, lista);
  error(nombre)

});
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  eliminar_alumno(nombre, lista);
  error(nombre);
});

let tiempo = setInterval(validacion);
