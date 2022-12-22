fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
    .then(myJson => display(myJson));


let myarray = [];
dupkey = [];
let edItem=-1;

display = (myjson) => {
    myarray = myjson;
    let key = Object.keys(myjson[0]);
    key.push("action");
    document.getElementById("tblhead").innerHTML = key.map((element) => {
        return `<th>${element}</th>`
    }).join(" ");

    document.getElementById("tblbody").innerHTML = myarray.map((element, index) => {
        return `<tr>
    <td>${element.userId}</td>
    <td>${element.id}</td>
    <td>${element.title}</td>
    <td>${element.body}</td>
    <td>
    <button class="btn" onclick="deleteData(${index})">❌ </button>
    <button class="btn" onclick="editData(${index})">✏️</button>
    </td>
    </tr>`
    }).join(" ");

}
deleteData = (index) => {
    let text = "Are you sure want to delete this data"
    if (confirm(text) == true) {
        myarray.splice(index, 1);
        display(myarray);
    }


}

editData = (index) => {
    edItem = index;
    document.getElementById('userId').value = myarray[index].userId;
    document.getElementById('title').value = myarray[index].title;
    document.getElementById('body').value = myarray[index].body;
    document.getElementById("dis").style.display = "block";



}
saveData = () => {
    if (edItem != -1) {
        myarray[edItem].userId = document.getElementById('userId').value;
        myarray[edItem].title = document.getElementById('title').value;
        myarray[edItem].body = document.getElementById('body').value;
    }
    document.getElementById("dis").style.display = "none";
    display(myarray);

}

