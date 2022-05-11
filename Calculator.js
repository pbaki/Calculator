function addNumber(number1, number2){
    return number1 + number2;
}
function subtractNumber(number1, number2){
    return number1 - number2;
}
function multiplyNumber(number1, number2){
    return number1 * number2;
}
function divideNumber(number1, number2){
    return number1 / number2;
}


function operate(operator, number1, number2){
    switch(operator){
        case "+":
            addNumber(number1, number2);
            break;
        case "-":
            subtractNumber(number1, number2);
            break;
        case "*":
            multiplyNumber(number1, number2);
            break;
        case "/":
            divideNumber(number1, number2);
            break;
    }
}
function showOnDisplay(){
    let store = "";
    let screen = document.getElementById("screen");
    let number1 = document.getElementById("number-1");
    number1.addEventListener("click", () => screen.innerHTML += "1", store += "1");
    let number2 = document.getElementById("number-2");
    number2.addEventListener("click", () => screen.innerHTML += "2", store += "2");
    let number3 = document.getElementById("number-3");
    number3.addEventListener("click", () => screen.innerHTML += "3", store += "3");
    let number4 = document.getElementById("number-4");
    number4.addEventListener("click", () => screen.innerHTML += "4", store += "4");
    let number5 = document.getElementById("number-5");
    number5.addEventListener("click", () => screen.innerHTML += "5", store += "5");
    let number6 = document.getElementById("number-6");
    number6.addEventListener("click", () => screen.innerHTML += "6", store += "6");
    let number7 = document.getElementById("number-7");
    number7.addEventListener("click", () => screen.innerHTML += "7", store += "7");
    let number8 = document.getElementById("number-8");
    number8.addEventListener("click", () => screen.innerHTML += "8", store += "8");
    let number9 = document.getElementById("number-9");
    number9.addEventListener("click", () => screen.innerHTML += "9", store += "9");
    let number0 = document.getElementById("number-0");
    number0.addEventListener("click", () => screen.innerHTML += "0", store += "0");
    let add = document.getElementById("add");
    add.addEventListener("click", () => screen.innerHTML += "+", store += "+");
    let subtract = document.getElementById("subtract");
    subtract.addEventListener("click", () => screen.innerHTML += "-", store += "-");
    let multiply = document.getElementById("multiply");
    multiply.addEventListener("click", () => screen.innerHTML += "*", store += "*");
    let divide = document.getElementById("divide");
    divide.addEventListener("click", () => screen.innerHTML += "/", store += "/");



}

showOnDisplay()