let inp = document.querySelector('input');
let ld = document.getElementById('ld').classList;
let sd = document.getElementById('sd').classList;
let mv = document.getElementById('myVideo');

inp.addEventListener('click',()=>{
    if(inp.checked){
        ld.remove("switch");
        sd.remove("slider");
        sd.add("slider1"); 
        ld.add("switch1");
        mv.play();
    }
    else{
        ld.add("switch");
        sd.add("slider");
        sd.remove("slider1");
        ld.remove("switch1");
        mv.pause();
    }
})