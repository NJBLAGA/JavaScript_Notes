import { compress } from "../src/compression"

describe("compress", () => {
  test("it compresses a string", () => {
    const testString = "aaaaaaabbbbbccccdd";
    const compressedString = "7a5b4cdd";
    expect(compress(testString)).toBe(compressedString);
  });

  xtest("it rejects strings with numeric characters", () => {
    const testString = "aa2aaabb7bbbccccdd";
    expect(() => {
      compress(testString);
    }).toThrow("Input string must be non-numeric");
  });

  xtest("it rejects non-string inputs", () => {
    expect(() => {
      compress(555);
    }).toThrow("Input must be a string");
  });

  xtest("it only changes where relevant", () => {
    const testString = "aabhhyyuu";
    expect(compress(testString)).toBe(testString);
  });
});

describe("decompress", () => {
  xtest("it decompresses a string", () => {
    const testString = "7a3bcuu5o";
    const output = "aaaaaaabbbcuuooooo";
    expect(decompress(testString)).toBe(output);
  });

  xtest("it rejects non-string inputs", () => {
    expect(() => {
      decompress(555);
    }).toThrow("Input must be a string");
  });

  xtest("it rejects repeated numbers", () => {
    const testString = "6a55i";
    expect(() => {
      decompress(testString);
    }).toThrow("Can't handle repeated numbers");
  });
});