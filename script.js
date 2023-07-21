let screen1 = document.getElementById("prev-operand");
let screen2 = document.getElementById("cur-operand");
let screenvalue ='';
const element = document.querySelectorAll("[data-number]");
for (const item of element) {
    item.addEventListener('click', (e) =>{buttonText = e.target.innerText;
        console.log('button is',buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenvalue +=buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='÷'){
            buttonText = '/'
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='+'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='-'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='='){
            screen2.value += eval(screenvalue) ;
        }
        else if(buttonText == 'AC'){
            screenvalue = "";
            screen1.value = screenvalue;
            screen2.value = screenvalue;
        }
        else if(buttonText=='1'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='2'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='3'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='4'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='5'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='6'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='7'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='8'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='9'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='.'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
        else if(buttonText=='DEL'){
            screenvalue = screen1.value;
            screen1.value = screenvalue.toString().slice(0,-1);
        }
        else if(buttonText=='0'){
            screenvalue += buttonText;
            screen1.value = screenvalue;
        }
    
    })
}







// const numberbtn= document.querySelectorAll('[data-number]')
// const operationbtn= document.querySelectorAll('[data-op]')
// const allclearbtn= document.querySelector('[data-all-clear]')
// const deletebtn= document.querySelector('[data-delete]')
// const equalsbtn= document.querySelectorAll('[data-equals]')
// const PrevOperandAndTextElement= document.querySelectorAll('[data-prev-operand]')
// const CurOperandAndTextElement= document.querySelectorAll('[data-cur-operand]')

// console.log(operationbtn) 