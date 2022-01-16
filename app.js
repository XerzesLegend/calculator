const display = document.querySelector('#screen');
let btns = document.querySelectorAll('button');

btns = Array.from(btns);
btns.forEach(btn => btn.addEventListener('click', function(e){
    if(e.target.id == "clear"){
        display.textContent = ""
    } else if (e.target.id == "delete"){
        let temp = display.textContent.length - 1;
        display.textContent = display.textContent.slice(0, temp)
    }else {
        display.textContent = display.textContent + e.target.textContent;
    }
}));



























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