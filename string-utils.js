const isPalindrome = (string) => string == string.split('').reverse().join('')

const isAnagram = (word1, word2) => {
    const regularize = (word) => {
        return word.toLowerCase().split('').sort().join('').trim()
    }
    return regularize(word1) === regularize(word2)
}

module.exports = { isPalindrome, isAnagram }