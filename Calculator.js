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
    if (operator == "+"){
        return addNumber(number1, number2);
    } else if (operator == "-"){
        return subtractNumber(number1, number2);
    } else if (operator == "*"){
        return multiplyNumber(number1, number2);
    } else if (operator == "/"){
        return divideNumber(number1, number2);
    }

}

let store = "";
let operation = "";
function showOnDisplay(){

    let upscreen = document.getElementById("upscreen");
    let screen = document.getElementById("screen");
    let number1 = document.getElementById("number-1");
    number1.addEventListener("click", add1 = () => {screen.innerHTML += "1", store += "1"});
    let number2 = document.getElementById("number-2");
    number2.addEventListener("click", add2 =  () => {screen.innerHTML += "2", store += "2"});
    let number3 = document.getElementById("number-3");
    number3.addEventListener("click", add3 = () => {screen.innerHTML += "3", store += "3"});
    let number4 = document.getElementById("number-4");
    number4.addEventListener("click", add4 = () => {screen.innerHTML += "4", store += "4"});
    let number5 = document.getElementById("number-5");
    number5.addEventListener("click", add5 = () => {screen.innerHTML += "5", store += "5"});
    let number6 = document.getElementById("number-6");
    number6.addEventListener("click", add6 = () => {screen.innerHTML += "6", store += "6"});
    let number7 = document.getElementById("number-7");
    number7.addEventListener("click", add7 = () => {screen.innerHTML += "7", store += "7"});
    let number8 = document.getElementById("number-8");
    number8.addEventListener("click", add8 = () => {screen.innerHTML += "8", store += "8"});
    let number9 = document.getElementById("number-9");
    number9.addEventListener("click", add9 = () => {screen.innerHTML += "9", store += "9"});
    let number0 = document.getElementById("number-0");
    number0.addEventListener("click", add0 = () => {screen.innerHTML += "0", store += "0"});
    let clearAll = document.getElementById("clear-all");
    clearAll.addEventListener("click", clear = () => {screen.innerHTML = "", store = "", upscreen.innerHTML = "", operation = ""});
   
    let add = document.getElementById("add");
    add.addEventListener("click", addadd = () => {upscreen.innerHTML == "" ? upscreen.innerHTML = screen.innerHTML + "+" : upscreen.innerHTML = operate(operation.split("").pop(), parseInt(upscreen.innerHTML), parseInt(screen.innerHTML)) + "+" ,screen.innerHTML = "",  operation += "+"});
    let subtract = document.getElementById("subtract");
    subtract.addEventListener("click", addsub = () => {upscreen.innerHTML == "" ? upscreen.innerHTML = screen.innerHTML + "-" : upscreen.innerHTML = operate(operation.split("").pop(), parseInt(upscreen.innerHTML), parseInt(screen.innerHTML)) + "-",  screen.innerHTML = "", operation += "-"});
    let multiply = document.getElementById("multiply");
    multiply.addEventListener("click", addmul = () => {upscreen.innerHTML == "" ? upscreen.innerHTML = screen.innerHTML + "*" : upscreen.innerHTML = operate(operation.split("").pop(), parseInt(upscreen.innerHTML), parseInt(screen.innerHTML)) + "*" , screen.innerHTML = "", operation += "*"});
    let divide = document.getElementById("divide");
    divide.addEventListener("click", adddiv = () => {upscreen.innerHTML == "" ? upscreen.innerHTML = screen.innerHTML + "/" : upscreen.innerHTML = operate(operation.split("").pop(), parseInt(upscreen.innerHTML), parseInt(screen.innerHTML)) + "/" , screen.innerHTML = "", operation += "/"});


    let equal = document.getElementById("equal");
    equal.addEventListener("click", solution = () => 
    {screen.innerHTML = operate(operation.split("").pop(), parseInt(upscreen.innerHTML), parseInt(screen.innerHTML)), store = screen.innerHTML, operation = "", upscreen.innerHTML = ""});
}
showOnDisplay()