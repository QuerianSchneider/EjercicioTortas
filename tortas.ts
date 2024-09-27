/*### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

//Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

//## Funciones a implementar:
//calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.
*/

import* as fs from 'readline-sync';

function calcularPuntaje(sabor:number, presentacion:number, dificultad:number):number{
    let puntajeTotal:number;
    puntajeTotal=sabor + presentacion + dificultad;
    return puntajeTotal;
}

function determinarGanador():void{
    const cantidadParticipantes:number=fs.questionInt("¿Cuantos participantes hay en el concurso?: ");

    let mejorPuntaje:number=0
    let nombreDelGanador:string | null=null;
    let isEmpate:boolean=false;

    let i:number=0
for(i=0; i<cantidadParticipantes;i++){
const nombreDelParticipante:string=fs.question("¿Cual es el nombre del participante?");
const sabor: number = fs.questionInt(`Puntua del 1 al 5 el sabor de la torta de ${nombreDelParticipante}: `);
const presentacion:number=fs.questionInt(`Puntua del 1 al 5 la presentacion de la torta de ${nombreDelParticipante}: `);
const dificultad:number=fs.questionInt(`Puntua del 1 al 5 la dificultad de la torta de ${nombreDelParticipante}: `);

const puntajeTotal:number=calcularPuntaje(sabor,presentacion,dificultad);
if(dificultad>5|| sabor>5|| presentacion>5){
    console.log("Cada puntaje debe ser menor o igual que 5, por favor introduce de nuevo los datos del participante");
    i-1;
}

if(puntajeTotal>mejorPuntaje){
    mejorPuntaje=puntajeTotal;
    nombreDelGanador=nombreDelParticipante;
    isEmpate=false;
}else if(puntajeTotal==mejorPuntaje){
    isEmpate=true;
}
}
if(isEmpate){
    console.log("Hay un empate");
}else if(nombreDelGanador)
    console.log(`El ganador es ${nombreDelGanador}, con un puntaje de: ${mejorPuntaje}`);
}
determinarGanador();
//Esto es todo lo que pude hacer, me quedaron varios errores como cuando se pasan de 5 en la puntuacion, no se como corregirlo.
console.log("Hola");