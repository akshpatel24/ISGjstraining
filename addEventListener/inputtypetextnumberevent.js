let text = document.getElementById("num");
text.addEventListener('keydown', filterNumber);

function filterNumber(event) {
    // Check if the key pressed is a number and is less than '0' or greater than '7'
    if (event.key < '0' || event.key > '7') {
        // Prevent the default action and clear the input value
        event.preventDefault();
        text.value = "";
    
    }
}