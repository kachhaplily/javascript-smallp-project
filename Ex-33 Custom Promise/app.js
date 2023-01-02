// myPromise = entity => new Promise ((sucess,reject)=>{
//     fetch("https://jsonplaceholder.typicode.com/" + entity)
//     .then(y=>y.json())
//     .then(y=>{

//         if(y.length > 0){

//             sucess(y);
//         }
//         else{
//             reject("Sorry lily");
//         }
//     })

// });

// myPromise("post").then(data => console.log(data))
// .catch(er=>console.log(er));


myfectfun = (entity) => new Promise((resolve, reject) => {

    fetch("https://jsonplaceholder.typicode.com/"+entity).
        then(y => {
            if (y.ok == false) {
                reject("Sorry ! this api not availabel");
            }
            return y.json();
        })

        .then(y => resolve(y))


})


myfectfun("posts").
then(data => document.getElementById("tbody").innerHTML=data.map((ele)=>{
    return `<tr> <td>${ele.id} </td>
    <td>${ele.title} </td>
    <td>${ele.userId} </td></tr>`
}).join(" ")).
catch(y => console.log(y))

