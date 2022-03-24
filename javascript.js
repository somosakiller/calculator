let container = document.querySelector('.container');
let numberButton = document.querySelectorAll('.numbers');
let operatorButton = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.equals')
let screen= document.querySelector('.display');
let clearButton = document.querySelector('#clear');
let decimalButton = document.querySelector('#decimal');
let backButton = document.querySelector('.backspace');
let num1 = '';
let num2 = '';
let operator = '';
let multipleOperationsCounter =0;
let decimalCounter =0;
let backspaceLimiter =0;


let operate = ()=>{
    // check the operator variable to determine we operation to execute
    

    if(operator === '+'){
        screen.textContent = add();
        backspaceLimiter =1;
        num1 = parseFloat(screen.textContent);
    }

    else if( operator === '-'){
        screen.textContent = subtract();
        backspaceLimiter =1;
        num1 = parseFloat(screen.textContent);
    }

    else if( operator === '*'){
        screen.textContent = multiply();
        backspaceLimiter =1;
        num1 = parseFloat(screen.textContent);
    }

    else if( operator === '/'){
        screen.textContent = divide();
        backspaceLimiter =1;
        num1 = parseFloat(screen.textContent);
    }
}

let add = ()=>{
    let sum = num1 + num2;
    return sum.toFixed(2);
}
let subtract = () => {
    let sub = num1 - num2;
    return sub.toFixed(2);
}

let multiply = () => {
    let prod = num1 * num2;
    return prod.toFixed(2);
}

let divide = () => {
    let  quo= num1 / num2;
    return quo.toFixed(2);
}

let display = ()=>{  
    // displays number buttons on calculator display
    numberButton.forEach(element => {
        element.addEventListener('click', ()=>{
            // clears display after each operation
            if(multipleOperationsCounter != 0){
                clearDisplay();
                multipleOperationsCounter =0;
                backspaceLimiter=0;
                
            }
            screen.textContent += element.textContent;
        })
    })
    // when an operator is clicked, function stores the operator, the number entered prior to
    // the operator being clicked, and then clears the display 
    operatorButton.forEach(element =>{
        element.addEventListener('click', ()=>{
            if(num1!=''){
                num2 = parseFloat(screen.textContent);
                operate();
                operator = element.textContent;
                multipleOperationsCounter =1;
                num2='';
                decimalCounter = 0;

            }
            else{
                operator = element.textContent;
                num1 = parseFloat(screen.textContent);
                clearDisplay();
                decimalCounter = 0;
            }
        })
    })

    equalButton.addEventListener('click', ()=>{
        if (screen.textContent ===''){
            screen.textContent = num1;
            multipleOperationsCounter =1;
            num1='';
            decimalCounter = 0;
        }
        else{
            multipleOperationsCounter = 1;
            num2 = parseFloat(screen.textContent);
            operate();
            num1='';
            num2='';
            decimalCounter = 0;
        }
    })

    decimalButton.addEventListener('click',()=>{
        if(decimalCounter!=0){
            screen.textContent+='';
        }
        else{
            screen.textContent+=decimalButton.textContent;
            decimalCounter = 1;
        }
        
    })

    backButton.addEventListener('click', ()=>{
        if(backspaceLimiter===0){
            screen.textContent = screen.textContent.slice(0,-1);
        }
    })

    clearButton.addEventListener('click', ()=>{
        clearDisplay();
        num1='';
        num2='';
        multipleOperationsCounter = 0;
        decimalCounter = 0;
        backspaceLimiter =0;
    })

    
}

let clearDisplay = ()=>{
    screen.textContent = '';
}
    
display();