// import { Calculator } from "../lib/jasmine_examples/Calculator";
let Calculator = require("../lib/jasmine_examples/Calculator");
// suite es un conjunto de specs
let calculator = new Calculator();
describe("Funciones de Calculadora", function () {
    // let calculator;
    // beforeEach(function () {
    //     calculator = new Calculator();
    // });
    /*
        spec, un spec toma un string que es la cadena de la especificacion 
        y la funcion es la especificacion o prueba
        Una especificación contiene una o más expectativas 
        que prueban el estado del código. 
        Una expectativa en Jasmine es una afirmación que es verdadera o falsa.
    */
    it("Funcion Suma debe recibir un numero y sumarlo", function () {
        /*Las espectativas se crean con la función expect que toma un valor, 
        llamado real. Está encadenado con una función Matcher, 
        que toma el valor esperado.*/

        /*
        Cada comparador implementa una comparación booleana entre el valor real
        y el valor esperado
        Es responsable de informar a Jasmine si la expectativa es verdadera o falsa. 
        Jasmine luego pasará o fallará la especificación.
        */
        // expect(true).toBe(true);
        calculator.sumar(3);
        expect(calculator.result).toBe(3)
    });
});

