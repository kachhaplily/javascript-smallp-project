
const xhttp1 = new XMLHttpRequest();
const xhttp2 = new XMLHttpRequest();
let albums = [];


xhttp1.onload = function () {
    albums = JSON.parse(this.responseText);
}
xhttp2.onload = function () {
    let resp = JSON.parse(this.responseText);
    for(let i=0;i<albums.length;i++){
        albums[i]["Body"]=resp[i].body;
    }

    console.log(albums);
}

xhttp1.open("GET", "https://jsonplaceholder.typicode.com/albums", false);
xhttp2.open("GET", " https://jsonplaceholder.typicode.com/posts", false);


xhttp1.send();
xhttp2.send();

display = () => {
    let th = "";
    for (const key in albums[0]) {
        th += `<th>${key} </th>`
    }
    document.getElementById("thead").innerHTML = th;
    document.getElementById('tbody').innerHTML = albums.map((ele) => {
        let td = "";
        for (const key in ele) {
            td += `<td>${ele[key]}</td>`
        }
        return `<tr>${td}</tr>`
    }).join(" ")
}

display();

