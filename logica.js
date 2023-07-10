const nombre = document.querySelector("[date-nombre]");
const agregar = document.querySelector("[date-agregar]");
const eliminar = document.querySelector("[date-eliminar");
const lista = document.querySelector("[date-lista]");
let lista_nombres = [];


function agregar_clase(nombre, etiqueta) {
  etiqueta.classList.add(`${nombre}`);
  
}
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

  let alumno = campo.value;
  if (campo.value != "" && bandera === true) {
    lista.innerHTML += "<p>" + `${alumno}` + "</p>";

    lista_nombres.push(campo.value);
    let ultimo = lista.lastChild
    agregar_clase(alumno, ultimo);
    campo.value = ""
  }else{
    error(nombre)
  }

}

function eliminar_alumno(campo, lista) {
  bandera = letras(campo.value);
 

  if (campo.value != "" && bandera === true) {
    text = campo.value;
    let p = document.querySelectorAll("p")
    encontrados = lista_nombres.filter((e) => e === text);
    contador = 0
    for (i = 0; i < p.length; i++) {
      for(j = 0; j < encontrados.length ; j++){
        if (p[i].className == encontrados[j]) {
          p[i].remove();
          console.log("funciono")
        }

      }

    }
  }
  campo.value = "";
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

});
eliminar.addEventListener("click", (e) => {
  e.preventDefault();
  eliminar_alumno(nombre, lista);
  error(nombre);
});

let tiempo = setInterval(validacion);
