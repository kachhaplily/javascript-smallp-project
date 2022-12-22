Upload=()=>{
    let files= document.getElementById("file").files;

   let filedata=new FormData();
   filedata.append("file",files[0]);
    console.log(filedata)

    fetch("http://localhost:8080/upload",{
        method:'post',
        body:filedata,
    }).then(y=>y.json()).then(y=>console.log(y))
}


fetch("http://localhost:8080/files/").then(y=>y.json()).then(y=>displayfile(y))


displayfile=(files)=>{

    for (const key in files[0]) {
            document.getElementById('thead').innerHTML += `<th>${key}</th> `
    }
   

document.getElementById('tbody').innerHTML=files.map((element)=>{
    
    return `<tr><td>${element.name}</td>
    <td> <a href="${element.url}">Download</a> </td>  </tr>
    
    `
}).join(" ");
console.log(files)
}
displayfile();