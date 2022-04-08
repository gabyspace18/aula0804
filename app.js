/* app.js */
// Opção 1: importe todo o modulo shape-area.js aqui
// Opção 2: importe as funções circleArea() e squareArea() usando a desestruturação de objetos aqui
//Use os métodos importados circleArea() e squareArea() aqui
//Imprima os valores de areaOfCircle e areaOfSquare aqui
const converters = require('./shape-area.js');

const raio = 5;
const lado = 10;

const raio = converters.circleArea(raio);
const lado = converters.squareArea(lado);

console.log(`AREA OF THE CIRCLE IS ${areaOfCircle}`);
console.log(`AREA OF THE SQUARE IS ${areaOfSquare}`);