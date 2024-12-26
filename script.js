function submitFN() {

//defining input holders
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let eMail = document.getElementById("mail").value;
    let querySelect = document.querySelector(("input[name='queryType']:checked"));
    let message = document.getElementById("msg").value;
    let agree = document.getElementById("agree").checked;
    // let alertFn = document.getElementsByClassName("alertHidden");
    let hasError = false;

    //check for correct email syntax:
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (eMail === "") {
        document.getElementById("mailCheck").style.visibility = "visible";
        hasError = true;

    } else if (!regex.test(eMail)) {
        document.getElementById("alertBox").innerText = "Please enter a valid email address";
        document.getElementById("alertBox").style.visibility = "visible";
        hasError = true;

    } else {
        document.getElementById("mailCheck").style.visibility = "hidden";
        document.getElementById("alertBox").style.visibility = "hidden";
    }

    if (message === "") {
        document.getElementById("msgRequired").style.visibility = "visible";
        hasError = true;

    } else {
        document.getElementById("msgRequired").style.visibility = "hidden";
    }
    if (firstName === "") {
        document.getElementById("fiName").style.visibility = "visible";
        hasError = true;


    } else {
        document.getElementById("fiName").style.visibility = "hidden";
    }
    if (lastName === "") {
        document.getElementById("laName").style.visibility = "visible";
        hasError = true;

    } else {
        document.getElementById("laName").style.visibility = "hidden";
    }
    if (querySelect === null) {
        document.getElementById("querRequired").style.visibility = "visible";
        hasError = true;

    } else {
        document.getElementById("querRequired").style.visibility = "hidden";
    }
    if (!agree) {
        document.getElementById("agreeReq").style.visibility = "visible";
        hasError = true;

    } else {
        document.getElementById("agreeReq").style.visibility = "hidden";
    }
    if (!hasError) {
alert("form completed")
    }
    else{
        console.log("not completed")
    }

}

console.log("script connected")
