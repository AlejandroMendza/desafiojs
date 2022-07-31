//Funciones

function pedirCantidad() {
  let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
  return cantidadAlumnos;
}
function prom(edades, alumnos) {
  return (let = edades / alumnos);
}

function mostrarResultados() {
  console.log(`La suma total es ${sumaEdades}`);
  console.log(`La edad promedio es ${parseInt(sumaEdades / cantidadAlumnos)}`);
}

// Variables

let edadAlumnos;
let sumaEdades = 0;
let cantidadAlumnos = pedirCantidad();

//Ciclo
let i;

for (let i = 1; i <= cantidadAlumnos; i++) {
  edadAlumnos = parseInt(prompt(`Ingrese la edad del alumno ${i}`));

  sumaEdades = sumaEdades + edadAlumnos;
}

//Cálculo del promedio a partir de las edades obtenidas del ciclo anterior y cantidad de alumnos por función
let promedio = prom(sumaEdades, cantidadAlumnos);

//Muestra de resultado por alert y por consola 

alert(
  `La edad promedio de los ${cantidadAlumnos} alumnos de coder house es ${promedio}`
);

mostrarResultados();

