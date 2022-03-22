let container = document.querySelector('.container');
let numberButton = document.querySelectorAll('.numbers');
let operatorButton = document.querySelectorAll('.operator');
let screen= document.querySelector('.display');
let num1 = '';
let num2 = '';

let operate = (operator, num1, num2)=>{
    if(operator === '+'){
        add(num1,num2);
    }

    else if( operator === '-'){
        subtract(num1,num2);
    }

    else if( operator === '*'){
        multiply(num1,num2);
    }

    else if( operator === '/'){
        divide(num1,num2);
    }
}

let add = (num1, num2)=>{
    let sum = num1 + num2;
    return sum;
}
let subtract = (num1, num2) => {
    let sub = num1 - num2;
    return sub;
}

let multiply = (num1, num2) => {
    let prod = num1 * num2;
    return product;
}

let divide = (num1, num2) => {
    let  quo= num1 / num2;
    return quo;
}

let display = ()=>{  
    numberButton.forEach(element => {
        element.addEventListener('click', ()=>{
            screen.textContent += element.textContent;
        })
    })
    operatorButton.forEach(element =>{
        element.addEventListener('click', ()=>{
            num1 = parseInt(screen.textContent);
            console.log(num1);
            clearDisplay();
        })
    })




}

let clearDisplay = ()=>{
    screen.textContent = '';
}
    
display();