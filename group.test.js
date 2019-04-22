const { sum, positive, negative } = require('./math-utils')
const { isPalindrome, isAnagram } = require('./string-utils')

describe('testing math utilities', () => {
    let values
    let sum_of_values
    let positive_values
    let negative_values

    beforeAll(() => {
        positive_values = [2, 1, 3]
        negative_values = [-2, -1, -1]
        values = positive_values.concat(negative_values)
        sum_of_values = values.reduce((x, y) => x + y, 0)
    })

    test('the sum of values should be 2', () => {
        expect(sum(values)).toBe(sum_of_values)
    })

    test('should get positive values', () => {
        expect(positive(values)).toEqual(positive_values)
    })

    test('should get negative values', () => {
        expect(negative(values)).toEqual(negative_values)
    })
})

describe('testing string utilities', () => {
    test.each(["racecar", "radar", "level", "refer", "deified", "civic"])(
        'testing %s for palindrome', (word) => {
            expect(isPalindrome(word)).toBe(true) //tutorial uses .toBeTruthy()
        },
    )

    test.each([["arc", "car"], ["cat", "act"], ["cider", "cried"]])(
        'testing if %s and %s are anagrams', (word1, word2) => {
            expect(isAnagram(word1, word2)).toBe(true) //tutorial uses.toBeTruthy()
        }
    )
})