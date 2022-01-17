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
    else if (e.target.id == "dot"){
        if(display.textContent == ""){
            display.textContent = display.textContent + '0' + e.target.textContent;
        }
        else{
            let cond = checkForOperators(display.textContent);
            let temp = returnFunctionInListForm(display.textContent);
            if(cond){
                if(temp[1] == ""){
                    display.textContent = display.textContent + '0' + e.target.textContent;
                }
                else if(!temp[1].includes('.')){
                    display.textContent = display.textContent + e.target.textContent;
                }  
            }

            else{
                if(!(display.textContent.includes('.'))){
                    display.textContent = display.textContent + e.target.textContent;
                }
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
    return (a+b).toFixed(2);
}
function subtract(a,b){
    return (a-b).toFixed(2);
}
function multiply(a,b){
    return (a*b).toFixed(2);
}
function divide(a,b){
    return (a/b).toFixed(2);
}
function operate(func){
    let ans;
    func[0] = parseFloat(func[0]);
    func[1] = parseFloat(func[1]);
    if(func[2] == "add"){
        ans = add(func[0],func[1]);
    }
    else if(func[2] == "subtract"){
        ans = subtract(func[0],func[1]);
    }
    else if(func[2] == "multiply"){
        ans = multiply(func[0],func[1]);
    }
    else if(func[2] == "divide"){
        ans = divide(func[0],func[1]);
    }
    ans = ans.toString();
    ans = parseFloat(ans);
    return (ans)
}

function checkForOperators(func){
    if(func.includes('x') || func.includes('-') || func.includes('+') || func.includes('÷')){
        return true
    }
    else{
        return false
    }
}

function checkForDot(func){
    if(func.includes('.')){
        return true
    }
    else{
        return false
    }
}