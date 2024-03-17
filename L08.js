const numbers = [1, 2, 3, 4, 5, 6, 7]

function print(element) {
    console.log(element)
}

print(numbers[0]) // 1
print(numbers[1]) // 2
print(numbers[2]) // 3

numbers.forEach(print) // will print out every number in numbers

numbers.forEach(function (el) {
    console.log(el) // ITS THE SAME as the above
})