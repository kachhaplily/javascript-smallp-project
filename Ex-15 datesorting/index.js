let mydata=[
    {
        name:"Ishwar",
        dob: "12/11/2000"
    },
    {
        name:"lily",
        dob: "08/25/1999"
    },  
    {
        name:"vivek",
        dob: "09/07/1993"
    },
    {
        name:"kajal",
        dob: "08/24/2001"
    }
]


// let newdate= new Date(mydata[1].dob);
// console.log(newdate);
let keys=[];
 
for (const key in mydata[0]) {
        keys.push(key);
}
let thead=keys.map((keythead)=>{
    return(
      `<th>${keythead}</th>`);
})
document.getElementById("thead").innerHTML=thead.join(" ");

 


display=(mydata)=>{
    let tbody=mydata.map((element)=>{
        let td="";
        for (const key in element) {
                // const element = object[key];
              td+= `<td>${element[key]}</td>`
        }
        return `<tr>${td}</tr>`
    })
    
    document.getElementById("tbody").innerHTML=tbody.join(" ");
    
}
display(mydata);

Sort=()=>{

    let sorting = mydata.sort((a,b)=>{
        if(new Date(a.dob) > new Date(b.dob) ){
            return 1
        }
        else{
            return -1
        }
    })
      display(sorting);
}

// console.log(sorting);
