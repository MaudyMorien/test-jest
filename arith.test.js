const { add, multiply, substraction, divide } = require('./arith')

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5)
})

test('8 / 4 = 2', () => {
    expect(divide(8, 4)).toBe(2)
})

test(' 3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12)
})

test('5 - 6 = -1', () => {
    expect(substraction(5, 6)).toBe(-1)
})