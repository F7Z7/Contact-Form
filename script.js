function submitFN() {

//defining input holders
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let eMail = document.getElementById("mail").value;
    let querySelect = document.querySelector(("input[name='queryType']:checked"));
    let message = document.getElementById("msg").value;
    let agree = document.getElementById("agree").checked;
    let required = document.getElementsByClassName("required");
    //check for correct email syntax:
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (eMail === "") {
        document.getElementById("mailCheck").style.visibility = "visible";

    } else if (regex.test(eMail)) {
        document.getElementById("mail").style.border = " 1px solid leafgreen;"

    } else {
        document.getElementById("alertBox").innerText = "Please enter valid email address";

    }

    if (message === "") {
        document.getElementById("msgRequired").style.visibility = "visible";
    } else {
        document.getElementById("msgRequired").style.visibility = "hidden";
    }
    if (firstName === "") {
        document.getElementById("fiName").style.visibility = "visible";

    } else {
        document.getElementById("fiName").style.visibility = "hidden";
    }
    if (lastName === "") {
        document.getElementById("laName").style.visibility = "visible";
    } else {
        document.getElementById("laName").style.visibility = "hidden";
    }
    if (querySelect === null) {
        document.getElementById("querRequired").style.visibility = "visible";
    } else {
        document.getElementById("querRequired").style.visibility = "hidden";
    }

}

console.log("script connected")
