// import {myLogin} from "./modul";
let myLogin = require("./modul.js");


let validate = true;
let myArray = [];

let mykey = [];

display = (myJson) => {
    myArray = myJson;

    document.getElementById('theadP').innerHTML = "";
    document.getElementById('tbodyP').innerHTML = "";
    for (const key in myArray) {
        if (key != "jwtToken") {
            // console.log(iterator);
            document.getElementById('theadP').innerHTML += `<th>${key}</th>`
        }
    }

    for (const key in myArray) {

        if (key != "jwtToken") {
            // console.log(key);
            document.getElementById('tbodyP').innerHTML += `<td>${myArray[key]}</td>`
        }
    }

}


login = () =>{
    validation();

    let myData = {

        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    
    }
    
    let myObj = new myLogin("authenticate",myData);
    if(validate == true){
    myObj.getData();
    }
     
}
signUp = () =>{
    validation();

    let myData = {
        title: document.getElementById("title").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
        acceptTerms: true
    }

    let myObj = new myLogin("register",myData);
    // myObj.getData();
    
    if(validate == true) {
        myObj.getData();
    }
}


/* ------------------------ validation form ------------------------*/

let frm = document.forms['frm1'];

validation = () => {

    clearErrors();
    validate = true;
    for (const i in frm) {

        if (frm.elements[i] !== undefined) {
            
            switch (frm.elements[i].type) {
                case 'text':

                if (frm.elements[i].value == '') {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }

                    break;
                case 'email':
                    if (frm.elements[i].value.length == 0) {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }

                    break;
                case 'password':
                    if (frm.elements[i].value.length == 0) {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }
                    break;
            }

        }

    }

}


clearErrors = () => {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

seterror = (i, error) => {

    document.getElementsByClassName('formerror')[i].innerHTML = error;

}