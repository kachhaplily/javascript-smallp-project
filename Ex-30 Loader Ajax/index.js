display = () => {
    const xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange=()=>{
        console.log(xhttp.readyState)
        if(xhttp.readyState<=3){
            document.getElementById("loader").style.display="block";
            // document.getElementById("demo").style.display="none";
        }
        else{
            document.getElementById("loader").style.display="none";

        }
     }
    xhttp.onload = function () {
           let resp = JSON.parse(this.responseText);
        //    console.log(resp);

   document.getElementById("tbody").innerHTML=resp.map((ele)=>{
            // console.log(ele);
            let td='';
            for (const key in ele) {
                    td +=`<td> ${ele[key]}</td>`   
            }
            return `<tr>${td}</tr>`
           }).join("")
    }

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xhttp.send();
    }