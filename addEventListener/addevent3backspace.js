let text = document.getElementById('num');

text.addEventListener('keydown', writing);

function writing(event) {
    let get = text.value.indexOf('.');
    let get2 = text.value.indexOf('-');
    let disallowedChars = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '/',
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];
    // DO not allow
    if (event.key === 'Delete') {
        text.value = '';
    } else if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
    } else if ((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z')) {
        event.preventDefault(); // Prevent alphabetic characters
    } else if (disallowedChars.includes(event.key)) {
        event.preventDefault(); // Prevent special characters
    } else if (event.key == '-' && get2 !== -1) {
        event.preventDefault(); // Prevent second minus sign
    } else if (get2 > 0) {
        text.value = ''; // Clear text if minus sign is entered after the first character
        event.preventDefault();
    }



    else if (get !== -1 && text.value.length - get > 2) {
        event.preventDefault();
    }

    if (text.value.includes(event.key)) {
        event.preventDefault();

    }



}