const { validateInput } = require('../src/client/js/validateInput');

const url1 = "http://www.google.com";
const url2 = "https://www.google.com";
const url3 = "hTTp://www.gOogle.com";
const url4 = "https://i.123.abc.DeFef";
const url5 = "https://i.123.abc.+";
const url6 = "http://www.google.123";
const url7 = "http://www.google.";
const url8 = "http://google";
const url9 = "google.google";
const url10 = "http:// .google";
const url11 = "https://www.latimes.com/politics/story/2019-10-16/trump-syria-border-clash-republicans"

test(url1, () => {
    expect(validateInput(url1)).toBe(true);
});
test(url2, () => {
    expect(validateInput(url2)).toBe(true);
});
test(url3, () => {
    expect(validateInput(url3)).toBe(true);
});
test(url4, () => {
    expect(validateInput(url4)).toBe(true);
});
test(url5, () => {
    expect(validateInput(url5)).toBe(false);
});
test(url6, () => {
    expect(validateInput(url6)).toBe(false);
});
test(url7, () => {
    expect(validateInput(url7)).toBe(false);
});
test(url8, () => {
    expect(validateInput(url8)).toBe(false);
});
test(url9, () => {
    expect(validateInput(url9)).toBe(false);
});
test(url10, () => {
    expect(validateInput(url10)).toBe(false);
});
test(url11, () => {
    expect(validateInput(url11)).toBe(true);
});