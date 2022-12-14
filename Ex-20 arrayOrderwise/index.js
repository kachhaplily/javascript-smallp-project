fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postdata => display(postdata));

let newpostdata = [];
let dupkey = [];
display = (postdata) => {
    newpostdata = postdata;
    // console.log(postdata);
    let key = Object.keys(postdata[0]);
    // console.log(key);
    dupkey = key;
    let theading = key.map((element, index) => {
        return `<th>${element} <button onclick=" up(${index})" > ⬆ 👍  </button>   <button onclick=" down(${index})" > ⬇ 👎  </button> </th>  `

    });
    document.getElementById("thead").innerHTML = theading.join(" ");

    let tbodycontent = postdata.map((element) => {
        return (
            ` <tr> <td> ${element.userId} </td> 
         <td> ${element.id} </td> 
         <td> ${element.title} </td> 
         <td> ${element.body} </td> </tr> `
        )
    })
    document.getElementById("tbody").innerHTML = tbodycontent.join(" ");



}
 up = (index) => {
    let data = dupkey[index]
    console.log(data);

    let sorting = newpostdata.sort((a, b) => {

        if (a[data]>b[data]) {
            return 1;
        }
        else {
            return -1;
        }

    })
    display(sorting);

}




 down = (index) => {
    let data = dupkey[index]
    console.log(data);

    let sorting = newpostdata.sort((a, b) => {
        if (a[data] < b[data]) {
            return 1;
        }
        else {
            return -1;
        }

    })
    display(sorting);
   
}
