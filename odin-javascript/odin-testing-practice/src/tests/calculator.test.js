import calculator from '../calculator';

const desiredCalculator = {
  add: expect.any(Function),
  subtract: expect.any(Function),
  multiply: expect.any(Function),
  divide: expect.any(Function),
};

describe('Calculator', () => {
  it('has basic functionality', () => {
    expect(calculator).toMatchObject(desiredCalculator);
  });

  it('adds 2 numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('subtracts 2 numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  it('multiplies 2 numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('divides 2 numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    // expect(calculator.divide(2, 3)).toBeCloseTo(0.6); Doesn't work for some reason
    expect(calculator.divide(2, 3)).toBe(2 / 3);
  });
});
