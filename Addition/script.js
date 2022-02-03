var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
var calculate1 = document.querySelector("#calculate");
var result = document.querySelector("#result");

calculate1.onclick=function() {
    
    if (!(number1 == '') && !(number2 == '')) {
        let sum = parseInt(number1.value) + parseInt(number2.value)
        result.textContent = sum
        
    } else {
        alert('please enter the number');
    }
    

}

