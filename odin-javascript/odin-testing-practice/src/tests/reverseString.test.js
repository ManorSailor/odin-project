import reverseString from '../reverseString';

describe('Reverses', () => {
  test('a character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('a word', () => {
    expect(reverseString('almalexia')).toBe('aixelamla');
  });

  test('a sentence', () => {
    expect(reverseString("Hello! It's me!")).toBe("!em s'tI !olleH");
  });
});

describe('Ignores', () => {
  test('empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('non-string values', () => {
    expect(reverseString(8)).toBe(8);
    expect(reverseString(8.8)).toBe(8.8);
    expect(reverseString(true)).toBe(true);
    expect(reverseString()).toBeUndefined();
    expect(reverseString(null)).toBeNull();
  });
});
