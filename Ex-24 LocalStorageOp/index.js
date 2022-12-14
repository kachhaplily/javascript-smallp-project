let myarray = '';
let isEdit = -1;
Save = () => {
    let inputname = document.getElementById("name").value;
    if (inputname.length == 0) {
        alert("enter value")
    }
    else {
        if (localStorage.getItem("Name") == null) {
            localStorage.setItem("Name", inputname);
        }
        else {
            let localdata = localStorage.getItem("Name").split(",");

            if (isEdit != -1){
                localdata[isEdit] = document.getElementById("name").value
                localStorage.setItem("Name", localdata.toString());
            }
            else{

                localdata.push(inputname);
                localStorage.setItem("Name", localdata.toString());
                console.log(localdata)
            }
            isEdit = -1;
        }

    }

    display();

}


display = () => {
    myarray = localStorage.getItem("Name").split(",");
    // console.log(data);
    document.getElementById("showdata").innerHTML = myarray.map((element, index) => {
        return (
            `<div> ${element}  <button onclick="removeitem(${index})">Delete </button> <button onclick="Edit(${index})">Edit</button> </div> `
        )
    }).join(" ")
}



removeitem = (index) => {
    myarray.splice(index, 1);
    localStorage.setItem('Name', myarray.toString());
    display();
}

Edit = (index) => {
    isEdit = index;
    document.getElementById("name").value = myarray[index];
}
