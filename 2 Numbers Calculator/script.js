var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")
var addition = document.getElementById("calculate")
var results = document.getElementById("result")

addition.onclick = function() {
    let add = parseInt(number1.value) + parseInt(number2.value)
    results.textContent = add
    console.log(add)
}
