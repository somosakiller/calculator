let container = document.querySelector('.container');
let numberButton = document.querySelectorAll('.numbers');
let operatorButton = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.equals')
let screen= document.querySelector('.display');
let clearButton = document.querySelector('#clear');
let num1 = '';
let num2 = '';
let operator = '';
let seriesCounter =0;


let operate = ()=>{
    // check the operator variable to determine we operation to execute

    if(operator === '+'){
        screen.textContent = add();
        num1 = parseInt(screen.textContent);
    }

    else if( operator === '-'){
        screen.textContent = subtract();
        num1 = parseInt(screen.textContent);
    }

    else if( operator === '*'){
        screen.textContent = multiply();
        num1 = parseInt(screen.textContent);
    }

    else if( operator === '/'){
        screen.textContent = divide();
        num1 = parseInt(screen.textContent);
    }
}

let add = ()=>{
    let sum = num1 + num2;
    return sum;
}
let subtract = () => {
    let sub = num1 - num2;
    return sub;
}

let multiply = () => {
    let prod = num1 * num2;
    return prod;
}

let divide = () => {
    let  quo= num1 / num2;
    return quo;
}

let display = ()=>{  
    // displays number buttons on calculator display
    numberButton.forEach(element => {
        element.addEventListener('click', ()=>{
            // clears display after each operation
            if(seriesCounter != 0){
                clearDisplay();
                seriesCounter =0;
                
            }
            screen.textContent += element.textContent;
        })
    })
    // when an operator is clicked, function stores the operator, the number entered prior to
    // the operator being clicked, and then clears the display 
    operatorButton.forEach(element =>{
        element.addEventListener('click', ()=>{
            if(num1!=''){
                num2 = parseInt(screen.textContent);
                operate();
                operator = element.textContent;
                seriesCounter =1;
                num2='';

            }
            else{
                operator = element.textContent;
                num1 = parseInt(screen.textContent);
                clearDisplay();
                console.log(num1);
            }
        })
    })

    equalButton.addEventListener('click', ()=>{
        seriesCounter = 1;
        num2 = parseInt(screen.textContent);
        operate();
        num1='';
        num2='';
        
    })

    clearButton.addEventListener('click', ()=>{
        clearDisplay();
        num1='';
        num2='';
        seriesCounter = 0;
    })


    

}

let clearDisplay = ()=>{
    screen.textContent = '';
}
    
display();