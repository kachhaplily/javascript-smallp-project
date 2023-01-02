let myarray = [];
fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then
    (y => display(y))

display = (y) => {
    myarray = y;
    document.getElementById("tbody").innerHTML=y.map((ele,index)=>{
        let td=" ";
        for (const key in ele) {
            td+=`<td>${ele[key]} </td>`                
        }
        return `<tr id="${index+1}">${td}</tr>`
        
    }).join(" ")

}
srchdata = () => {
    let srchid=document.getElementById('srchid').value;
   let filtersrch=myarray.filter((ele)=>{
        return (Object.values(ele)).includes(srchid);
    })
    

    let tr=document.getElementsByTagName('tr');
    for (iterator of tr) {
        console.log(iterator);
        if(iterator.id==filtersrch[0].id){
            document.getElementById(`${iterator.id}`).style.backgroundColor="yellow";
        }
    }

    
}