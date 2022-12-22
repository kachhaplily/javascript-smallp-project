function sendData()
{

    let myObj = {
 title: document.getElementById("title").value,
firstName: document.getElementById("firstName").value,
lastName: document.getElementById("lastName").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value,
confirmPassword:document.getElementById("confirmPassword").value,
acceptTerms: true
}


fetch("http://localhost:4000/accounts/register", {
method: 'POST',
body: JSON.stringify(myObj),
headers: {
'Content-Type': 'application/json'
}
} ).then(y=> y.json())
.then(y=> {
console.log(y);
})
}