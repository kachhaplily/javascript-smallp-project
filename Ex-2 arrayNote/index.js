let mydata = [];
let isEdit = -1;//isEdit is a flag bydefault is false;

const display = () => {
    let mydatadisplay = mydata.map(function (value, index) {
        return `<div class="datarow"> <div>${value} </div> <div><button onClick="remove('${index}')"><i class="fa fa-times" aria-hidden="true"></i> </button>  <button onClick="edit('${index}')"> <i class="fa fa-pencil" aria-hidden="true"></i></button> </div></div> `
    });
    document.getElementById("datadisplay").innerHTML = mydatadisplay.join(" ");
}
const save = () => {
    var inputData = document.getElementById("inputData").value;
    if (inputData == "") {
        alert("enter value")
    }
    else {

        if (isEdit != -1) {
            mydata[isEdit] = document.getElementById("inputData").value
        }
        else {
            mydata.push(inputData);
        }
        isEdit = -1;
        display();

    }
    document.getElementById("inputData").value = "";

}


const remove =(index) => {
    mydata.splice(index,1);
    // var myfilterdata = mydata.filter(function (value,filterindex) {
    //     if (filterindex != index) {
    //         return value;
    //     }
    // });
    //  var myfilterdata = mydata.splice(index[0],index[1])
    // mydata = myfilterdata;
    display();

}

const edit = (index) => {
    isEdit = index; // this statement retun index value 

    document.getElementById("inputData").value = mydata[index];
};
