const display = document.querySelector('#screen');
let btns = document.querySelectorAll('button');

btns = Array.from(btns);
btns.forEach(btn => btn.addEventListener('click', function(e){
    let cond = (e.target.id == "add") || (e.target.id == "div") || (e.target.id == "mult") || (e.target.id == "sub");
    if(e.target.id == "clear"){
        display.textContent = ""
    } 
    else if (e.target.id == "delete"){
        let temp = display.textContent.length - 1;
        display.textContent = display.textContent.slice(0, temp)
    }
    else if (e.target.id == "equal"){
        display.textContent = operate(returnFunctionInListForm(display.textContent));
    }
    else if (cond){
        if (checkForOperators(display.textContent)){
            display.textContent = operate(returnFunctionInListForm(display.textContent)) + e.target.textContent; 
        }
        else{
            display.textContent = display.textContent + e.target.textContent;
        }
    }
    else if (e.target.id == "zero"){
        if(display.textContent != ""){
            if(checkForOperators(display.textContent)){
                let temp = returnFunctionInListForm(display.textContent);
                if(temp[1] != ""){
                    display.textContent = display.textContent + e.target.textContent;
                }
            }
            else{
                display.textContent = display.textContent + e.target.textContent;
            }
        }
        
    }   
    else {
        display.textContent = display.textContent + e.target.textContent;
    }
}));





function returnFunctionInListForm(func){
    let temp = [];
    let lst = [];
    if(func.includes('x')){
        temp = func.split('x');
        lst = [temp[0], temp[1], 'multiply']
    }
    else if(func.includes('+')){
        temp = func.split('+');
        lst = [temp[0], temp[1], 'add']
    }
    else if(func.includes('-')){
        temp = func.split('-');
        lst = [temp[0], temp[1], 'subtract']
    }
    else if(func.includes('÷')){
        temp = func.split('÷');
        lst = [temp[0], temp[1], 'divide']
    }
    return lst
}




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
function operate(func){
    func[0] = parseInt(func[0]);
    func[1] = parseInt(func[1]);
    if(func[2] == "add"){
        return add(func[0],func[1]);
    }
    else if(func[2] == "subtract"){
        return subtract(func[0],func[1]);
    }
    else if(func[2] == "multiply"){
        return multiply(func[0],func[1]);
    }
    else if(func[2] == "divide"){
        return divide(func[0],func[1]);
    }
}

function checkForOperators(func){
    if(func.includes('x') || func.includes('-') || func.includes('+') || func.includes('÷')){
        return true
    }
    else{
        return false
    }
}