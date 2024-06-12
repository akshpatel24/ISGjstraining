
document.addEventListener('DOMContentLoaded', function () {

    let txtName = document.getElementById("txtName");
    let txtPhoneNumber = document.getElementById("txtPhoneNumber");
    let txtEmail = document.getElementById("txtEmail");
    let ddlGender = document.getElementById("ddlGender");
    let messageBox = document.getElementById("messageBox");

    // let txtNum1 = document.getElementById("txtNum1");
    // let txtNum2 = document.getElementById("txtNum2");

});

function onValidationClick() {
    try {
        let fullNameRegEx = /^[a-zA-Z]/;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonePattern = /^\d+$/;

        if (txtName.value == "") {
            alert("Name has to be filled.")
        } else if (!fullNameRegEx.test(txtName.value)) {
            alert("Please enter valid name.")
        }

        if (txtEmail.value == "") {
            alert("Email has to be filled.")
        }
        else if (!emailPattern.test(txtEmail.value)) {
            alert("Email has to be valid.")
        }

        if (txtPhoneNumber.value === "") {
            alert("Phone number must be filled.");

        } else if (!phonePattern.test(txtPhoneNumber.value) && txtPhoneNumber.value.length <= 10) {
            alert("Phone must be a 10-digit number.");
        }

        // getVariable(txtNum1.value,txtNum2.value);
    }
    catch (error) {
        alert(error);
    }
}

function onGenderChange() {
    let selectedGenderIndex = ddlGender.selectedIndex;
    let selectedGenderText = ddlGender.options[selectedGenderIndex].text;
    alert(selectedGenderText);
    messageBox.innerHTML = selectedGenderText;
}

function onTextChage(objectID) {
    let fielddName = document.getElementById(objectID);
    messageBox.innerHTML = fielddName.value;
}


function getVariable(varNum1, varNum2) {
    let sun = Number(varNum1) + Number(varNum2);
    messageBox.innerHTML = sun;
}