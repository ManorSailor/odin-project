import capitalize from '../capitalize';

describe('Capitalizes', () => {
  test('single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('first letter of a string', () => {
    expect(capitalize('almalexia')).toBe('Almalexia');
  });
});

describe('Ignores', () => {
  test('empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('non-string values', () => {
    expect(capitalize(8)).toBe(8);
    expect(capitalize(8.8)).toBe(8.8);
    expect(capitalize(true)).toBe(true);
    expect(capitalize()).toBeUndefined();
    expect(capitalize(null)).toBeNull();
  });
});
