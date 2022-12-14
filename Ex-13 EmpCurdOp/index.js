 // crete a json 
 let key1 = "fname";
 let key2 = "lname";
 let key3 = "city";
 let key4 = "age";

 let isEdit=-1;
 let empdata = [
  
 ]



 const display = () => {
    let newEmpData = empdata.map(function (value, index) {
       return( `<tr><td>${value[key1]} </td> 
          <td> ${value[key2]}</td>
          <td> ${value[key3]}</td>
          <td> ${value[key4]}</td>
          <td> <button class="btn1" onClick="edit('${index}')"><i class="fa fa-pencil" aria-hidden="true"></i> </button> 
              <button  class="btn1" onClick="remove('${index}')"><i class="fa fa-times" aria-hidden="true"></i></button> 
          </td>
          <tr>`)
    });
    document.getElementById("tabeldata").innerHTML = newEmpData;

 }



 const addItem = () => {
    let fname = document.getElementById('empName').value;
    let empLastName = document.getElementById('empLastName').value;
    let city = document.getElementById('empCity').value;
    let age = document.getElementById('empAge').value;


    if(isEdit != -1){


      empdata[isEdit]={ [key1]: fname, [key2]: empLastName, [key3]: city, [key4]: age }

    }
    else{
    empdata.push({ [key1]: fname, [key2]: empLastName, [key3]: city, [key4]: age })
    console.log(empdata);
    }
    display();


 };

 const remove =(index) => {
    var filterdata = empdata.filter(function (value,empindex) {
       if (empindex != index) {
          return value;
       }
    });

    empdata = filterdata;
    display();

 };


 const edit =(index)=>{
    isEdit = index;

      document.getElementById('empName').value=empdata[index][key1];
      document.getElementById('empLastName').value=empdata[index][key2];
      document.getElementById('empCity').value=empdata[index][key3];
      document.getElementById('empAge').value=empdata[index][key4];

 };