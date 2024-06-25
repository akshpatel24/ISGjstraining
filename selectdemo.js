function setselected() {
    let selectOption = document.getElementById("01");
    selectOption.value = "Browser";
    
}

function getselected() {
    let selectOption = document.querySelector("select option[name='optionpick']:checked");
    let textBox = document.getElementById('bro');
    textBox.value = selectOption ? selectOption.value : "NA";
}
