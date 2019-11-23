function Calculator(result = 0) {
    this.result  = result;
}

Calculator.prototype.sumar = function(number) {
    this.result = this.result + number;
}

module.exports = Calculator;