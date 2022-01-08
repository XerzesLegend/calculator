const display = document.querySelector('#screen');
let btns = document.querySelectorAll('button');

let displayValue = "";
btns = Array.from(btns);
btns.forEach(btn => btn.addEventListener('click', function(e){
    if(e.id == "clear"){
        display.textContent = ""
    }
    else if(e.id == "delete"){
        let temp = displayValue.length - 1;
        displayValue = displayValue.slice(0, temp)
    }
    else{
        displayValue = displayValue + e.textContent;
    }
}));

display.textContent = displayValue;

























function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b ;
}
function operate(a,b, op){
    if(op == "add"){
        return add(a,b);
    }
    else if(op == "subtract"){
        return subtract(a,b);
    }
    else if(op == "multiply"){
        return multiply(a,b);
    }
    else if(op == "divide"){
        return divide(a,b);
    }
}