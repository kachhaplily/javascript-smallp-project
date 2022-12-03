let formdata = document.forms["myfrm"];
let myjson = [];
console.log(formdata);

const Save = () => {
    let dbobj = {}
    let validation=true;
    for (let i = 0; i < formdata.length; i++) {
        switch (formdata.elements[i].type) {
            case 'radio':
                if (formdata.elements[i].checked) {
                    dbobj[formdata.elements[i].name] = formdata.elements[i].value;
                }
                break;
            case 'checkbox':
                if (formdata.elements[i].checked) {
                    if (typeof dbobj[formdata.elements[i].name] == "undefined") {
                        dbobj[formdata.elements[i].name] = [formdata.elements[i].value];
                    }
                    else {
                        dbobj[formdata.elements[i].name].push(formdata.elements[i].value)
                    }
                }
                break;
            default:
                dbobj[formdata.elements[i].name] = formdata.elements[i].value;
                break;
        }
      
       
    }

    //    myjson.push(dbobj);
    // displaydata(myjson)
    for(let i in formdata){
        if(formdata.elements[i]!==undefined)
        {
            switch (formdata.elements[i].type) {
                case 'text': if(formdata.elements[i].value==0){
                    validation= false;
                }
                break;
                case 'tel':if(formdata.elements[i].value==0)
                validation= false;
                    break;
                case 'email':
                    if(formdata.elements[i].value==0)
                validation= false;
                break;
               
              
               
               
                
                
                
            
               
            }
        }
    }

    if(validation==true){
    myjson.push(dbobj);
    displaydata(myjson)

    }

}
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
    document.getElementById("tbody").innerHTML = displaydb.join(" ");
}



// validation 
checkNumber = (evt) => {
    if (Number.isInteger(parseInt(evt.key))) {
        console.log(evt.key);
     }
     else{
         evt.preventDefault();
     }
}
 

