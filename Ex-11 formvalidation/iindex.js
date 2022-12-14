
let myjson = [];
let checked=[];

let formdata = document.forms['myfrm'];

formdata.addEventListener('submit', (e) => {
    e.preventDefault()
   let ck=  document.querySelectorAll('[type=checkbox]:checked').length;
     for(let i=0;i<ck;i++){
        checked[i] =document.getElementsByClassName('chk')[i].value; 
        console.log(checked[i])   
     }

     console.log(checked);
   

    const fb = new FormData(formdata);
    // console.log(fb);
    const newfdb = Object.fromEntries(fb);
    newfdb["code"]=checked;
    myjson.push(newfdb);
    checked=[];
    displaydata(myjson)
})

displaydata = (myjson) => {
    let displaydb = myjson.map((element) => {
        return `<tr>${displaytabel(element)}</tr>`
    })
    function displaytabel(element) {
        let text = '';
        for (const key in element) {
            text += `<td>${element[key]}</td>`
        }
        return text;

    }
    document.getElementById("tbody").innerHTML=displaydb.join(" ");
}







