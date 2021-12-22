const { sum } = require("../utils");

test("Positive Test App.js",()=>{
    expect(sum(1, 2)).toBe(3);
})

test("Negative Test App.js",()=>{
    expect(sum(1, 2)).not.toBe(4);
})