// Select the button with ID "btn1"
let btn = document.getElementById("btn1");

let tracker='0'
// Add a click event listener to the button
btn.addEventListener("click", myFunction);

// Define the function that will be called on click
function myFunction(event) {

while(1)
{
    if(btn.value==tracker){
        tracker='X'
        btn.value='X'

    }
    else{
        tracker='0'
        btn.value='0'
    }

}


}
