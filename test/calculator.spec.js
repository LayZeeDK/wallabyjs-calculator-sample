const Calculator = require('../src/calculator');

describe('calculator model', function() {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should add numbers', function() {
    console.log(calculator.add(Infinity, NaN));
    console.log(calculator.add(2, 3));

    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should throw error when dividing by zero', function() {
    expect(function() {
      calculator.divide(1, 0);
    }).to.throw();

    // console.log(calculator.divide(2, 0));
    console.log(calculator.divide(0, 2));
    console.log(calculator.divide(2, -3));
  });

  it('should divide number', function() {
    expect(calculator.divide(6, 2)).to.equal(3);
  });

  it('should subtract positive numbers', function() {
    expect(calculator.subtract(4, 2)).to.equal(2);
  });

  it('should multiply numbers', function() {
    expect(calculator.multiply(0, 3)).to.equal(0);
    expect(calculator.multiply(3, 0)).to.equal(0);
  });
});
