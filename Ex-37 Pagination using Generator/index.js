 async function* fetchdata() {
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=${yield}&per_page=20`);
    const response = await data.json();
    yield await response;
    
}
display = async (id) => {
    const fb = await fetchdata();
    await fb.next().value;
        let count=id;        
      let  db=await(await fb.next(count)).value; 
          
    document.getElementById("datadisplay").innerHTML=db.map((ele)=>{
        return `<div>${ele.name}</div>`
    }).join(" ");
   
  

}
for (const iterator of object) {
    
}
display(1);
displaybtn=()=>{
    // document.getElementById('btncontainer').innerHTML += ` <button onclick="pre()">next</button>`
    
    for (i = 1; i <= 17; i++) {
        document.getElementById('btncontainer').innerHTML += ` <button onclick="display('${i}')">${i}</button>`;
    }
    document.getElementById('btncontainer').innerHTML += ` <button onclick="next()">next</button>`
}
displaybtn(1);






