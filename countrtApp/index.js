let counting = document.getElementById("counting");
let savedata = document.getElementById("savedata");
let count =0;


function Count(){
    count =+ count +1;
    counting.textContent =count;
}

function save(){
    let str = count + "-"
    savedata.textContent += str;
    counting.textContent =0;
  
}

