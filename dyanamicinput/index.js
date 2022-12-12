
let inputdata=[];
document.getElementById('btn').addEventListener('click',()=>{
    let input_1= document.createElement('input');
    let input_2=document.createElement('input');
    input_1.name="Sujects";
    input_2.name="Marks";

    input_2.addEventListener('keypress',(evt)=>{
        if (Number.isInteger(parseInt(evt.key))) {
            console.log(evt.key);
         }
         else{
             evt.preventDefault();
         }
     });
    input_1.placeholder="Enter Eduaction"
    input_2.placeholder="Marks"

    document.getElementById('frm').appendChild(input_1);
    document.getElementById('frm').appendChild(input_2);
    
 

   


})

display=()=>{

    let formdata=document.querySelectorAll('input');

        let  obj={};
        for(let i=0;i<formdata.length;i++){
            // console.log(fromdata[i].value)
            obj[formdata[i].name] = formdata[i].value;
            
        }
        inputdata.push(obj);
        console.log(inputdata);
        for(let i=0;i<formdata.length;i++){
            formdata[i].value=" ";
        }




        // display header
        let key = Object.keys(inputdata[0]);
         document.getElementById("head").innerHTML=key.map((element)=>{
           return( `<th>${element}</th>`);
         }).join(" ");


         document.getElementById("tbody").innerHTML=inputdata.map((element)=>{
            return( `<tr> <td> ${element.Sujects}</td>  <td>${element.Marks} </td></tr>`)
         }).join(" ")


     
     
}



