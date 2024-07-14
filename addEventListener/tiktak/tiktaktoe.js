// Select the button with ID "btn1"
let btn = document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");

let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");






let clear=document.getElementById("clear");


clear.addEventListener("click", clearing);
btn.addEventListener("click", myFunction);

btn2.addEventListener("click",myFunction2);``

btn3.addEventListener("click",myFunction3);

btn4.addEventListener("click",myFunction4);


btn5.addEventListener("click",myFunction5);

btn6.addEventListener("click", myFunction6);
btn7.addEventListener("click", myFunction7);
btn8.addEventListener("click", myFunction8);
btn9.addEventListener("click", myFunction9);




// winner.addEventListener("click", myFunctionresult);
// Define the function that will be called on click


function myFunction(event) {
    condition()
     if(btn.value=='0'){
        btn.value='X'

    }
    else{
        btn.value='0'
        
    }


}


function myFunction2(event) {
    condition()
    if(btn2.value=='0'){
       btn2.value='X'

   }
   else{
       btn2.value='0'
   }

}

function myFunction3(event) {
    condition()
    if(btn3.value=='0'){
       btn3.value='X'

   }
   else{
       btn3.value='0'
   }

}

function myFunction4(event) {
    
    condition()
    if(btn4.value=='0'){
       btn4.value='X'

   }
   else{
       btn4.value='0'
   }

}

function myFunction5(event) {
    
    condition()
    if(btn5.value=='0'){
       btn5.value='X'

   }
   else{
       btn5.value='0'
   }

}
function myFunction6(event) {
    condition()
    if (btn6.value == '0') {
        btn6.value = 'X';
    } else {
        btn6.value = '0';
    }
}

function myFunction7(event) {
    condition()
    if (btn7.value == '0') {
        btn7.value = 'X';
    } else {
        btn7.value = '0';
    }
}

function myFunction8(event) {
    condition()
    if (btn8.value == '0') {
        btn8.value = 'X';
    } else {
        btn8.value = '0';
    }
}

function condition()
{
if (
    (btn.value == 'X' && btn2.value == 'X' && btn3.value == 'X') ||  // Row 1
    (btn4.value == 'X' && btn5.value == 'X' && btn6.value == 'X') ||  // Row 2
    (btn7.value == 'X' && btn8.value == 'X' && btn9.value == 'X') ||  // Row 3
    (btn.value == 'X' && btn4.value == 'X' && btn7.value == 'X') ||  // Column 1
    (btn2.value == 'X' && btn5.value == 'X' && btn8.value == 'X') ||  // Column 2
    (btn3.value == 'X' && btn6.value == 'X' && btn9.value == 'X') ||  // Column 3
    (btn.value == 'X' && btn5.value == 'X' && btn9.value == 'X') ||  // Diagonal 1
    (btn3.value == 'X' && btn5.value == 'X' && btn7.value == 'X')     // Diagonal 2
) 
{
   alert("Player 1 has win.")          
    disableAllButtons()
     // final.value = 'X Wins';

}

if (
    (btn.value == '0' && btn2.value == '0' && btn3.value == '0') ||  // Row 1
    (btn4.value == '0' && btn5.value == '0' && btn6.value == '0') ||  // Row 2
    (btn7.value == '0' && btn8.value == '0' && btn9.value == '0') ||  // Row 3
    (btn.value == '0' && btn4.value == '0' && btn7.value == '0') ||  // Column 1
    (btn2.value == '0' && btn5.value == '0' && btn8.value == '0') ||  // Column 2
    (btn3.value == '0' && btn6.value == '0' && btn9.value == '0') ||  // Column 3
    (btn.value == '0' && btn5.value == '0' && btn9.value == '0') ||  // Diagonal 1
    (btn3.value == '0' && btn5.value == '0' && btn7.value == '0')     // Diagonal 2
) {
    alert("p2 wins")  
    disableAllButtons() 
} 



}









function myFunction9(event) {
    condition()
    if (btn9.value == '0') {
        btn9.value = 'X';
    } else {
        btn9.value = '0';
    }
}

function clearing(event) {    
    btn.value = '';
    btn2.value = '';
    btn3.value = '';
    btn4.value = '';
    btn5.value = '';
    btn6.value = '';
    btn7.value = '';
    btn8.value = '';
    btn9.value = '';


    }   
//function provided from greektutorial important in mking sure output excatly as want otherwize after alert it
// will still print button follow 
    function disableAllButtons() {
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
