let myarray = [];
fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then
    (y => display(y))

display = (y) => {
    myarray = y;
    document.getElementById("tbody").innerHTML = y.map((ele) => {
        let td = " ";
        for (const key in ele) {
            td += `<td>${ele[key]} </td>`
        }
        return `<tr id="${ele.id}">${td}</tr>`

    }).join(" ")

}
srchdata = () => {
    let srchid = document.getElementById('srchid').value;


    let filtersrch = myarray.filter((ele) => {
        let text = Object.values(ele).join(" ");
        return text.indexOf(srchid) >= 0;

    })
  
console.log(filtersrch);

    let tr = document.getElementsByTagName('tr');
   
      for (const iterator of tr) {
       for (const i of filtersrch) {
        if(iterator.id==i.id){
           document.getElementById(`${iterator.id}`).style.backgroundColor="yellow"
        }
        
       }
        
      }
    


}