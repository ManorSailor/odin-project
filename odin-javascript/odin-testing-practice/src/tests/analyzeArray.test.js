import analyzeArray from '../analyzeArray';

const desiredObject = {
  average: expect.any(Number),
  min: expect.any(Number),
  max: expect.any(Number),
  length: expect.any(Number),
};

let array = [1, 8, 3, 4, 2, 6];

describe('Analyzer', () => {
  it('has all properties', () => {
    expect(analyzeArray(array)).toMatchObject(desiredObject);
  });

  it('calculates correct average', () => {
    expect(analyzeArray(array).average).toBe(4);
  });

  it('calculates correct min', () => {
    expect(analyzeArray(array).min).toBe(1);
  });

  it('calculates correct max', () => {
    expect(analyzeArray(array).max).toBe(8);
  });

  it('calculates correct length', () => {
    expect(analyzeArray(array).length).toBe(6);
  });
});
