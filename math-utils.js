const sum = (values) => {

    let sum = 0

    values.map((values) => {
        return sum += values
    })

    return sum
}

const positive = (values) => {

    return values.filter((x) => { return x > 0 })
}

const negative = (values) => {

    return values.filter((x) => { return x < 0 })
}

module.exports = { sum, positive, negative }