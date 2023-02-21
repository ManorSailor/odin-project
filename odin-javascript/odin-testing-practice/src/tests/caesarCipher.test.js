import caesar from '../caesarCipher';

describe('Cipher', () => {
  it('a character', () => {
    expect(caesar('A', 1)).toBe('B');
  });

  it('a word', () => {
    expect(caesar('hmm', 5)).toBe('mrr');
  });

  it('a sentence with punctuation', () => {
    expect(caesar('hello, world!', 5)).toBe('mjqqt, btwqi!');
  });

  it('handles wrapping', () => {
    expect(caesar('z', 1)).toBe('a');
  });

  it('preserves case sensitivity', () => {
    expect(caesar('aAzA', 1)).toBe('bBaB');
  });

  it('ignores non-alphabets', () => {
    expect(caesar()).toBeUndefined();
    expect(caesar(8)).toBe(8);
  });

  it('a sentence with large key', () => {
    expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
  });
});
