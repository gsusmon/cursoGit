class Calculadora {
    constructor(){
    }

sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}

multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}

dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}

potenciar(num,exp){
    return num**exp;
}

raizCuadrara(num){
   return Math.sqrt(num);
}

raizCubica(num){
   return Math.cbrt(num);
}

}

const calculadora = new Calculadora();

alert("¿qué operación deseas realizar?");

operación = prompt("1: suma, 2: resta, 3: multiplicación, 4: divisón, 5: potenciación 6: raíz cuadrada, 7: raíz cúbica");

if (operación == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 3) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 4) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 5) {
    let numero1 = prompt("número para potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 6) {
    let numero1 = prompt("conocer la raíz cuadrada de:");
    resultado = calculadora.raizCuadrara(numero1);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 7) {
    let numero1 = prompt("conocer la raíz cúbica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}

else {
    alert("no se ha encontrado la operación");
}







