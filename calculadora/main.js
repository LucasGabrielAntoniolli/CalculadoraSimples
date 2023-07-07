
let firstNumber = 0;
let secondNumber = 0;
let punctuation = '';
let result = 0;
let cont = 0;

function addNumber(number){
    if(number == '.'){
        if(cont == 1){
            return;
        } else {
            cont = 1;
        }
    }

    liThree.innerHTML = liThree.innerHTML + number;
   
};

function addSinal(sinal) {
    if (liThree.innerHTML == '') {
        return;
    }

    punctuation = sinal
    firstNumber = parseFloat(liThree.innerHTML);
    liOne.innerHTML = liThree.innerHTML + sinal;
    liThree.innerHTML = '';
    cont = 0;
};

function calcPrint() {
    if (liThree.innerHTML == '' || liOne.innerHTML == '') {
        return;
    }

    secondNumber = parseFloat(liThree.innerHTML);
    
    switch (punctuation) {
        case '-':

            result = firstNumber - secondNumber;
            
            break;
        case '+':

            result = firstNumber + secondNumber;
            
            break;
        case '*':

            result = firstNumber * secondNumber;
            
            break;
        case '/':
        
            result = firstNumber / secondNumber;
            
            break;
    
        default:
            break;
    }
    
    liTwo.innerHTML = result;

    liOne.innerHTML = '';
    liThree.innerHTML = '';
    punctuation = '';
    cont = 0;
};

function useCalc() {

    if (liTwo.innerHTML == '') {
        return;
    }

    liThree.innerHTML = liTwo.innerHTML; 
    liTwo.innerHTML = '';
}

function remove() {
     firstNumber = 0;
     secondNumber = 0;
     punctuation = '';
     result = 0;
     cont = 0;
     liOne.innerHTML = '';
     liTwo.innerHTML = '';
     liThree.innerHTML = '';
};

function deleta() {
    firstNumber = 0;
    liThree.innerHTML = '';
}

const liOne = document.getElementById('liOne');
const liTwo = document.getElementById('liTwo');
const liThree = document.getElementById('liThree');