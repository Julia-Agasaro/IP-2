
function akanname() {
   
    var input = document.getElementById("birthdate").value;
    var d =new Date( input);
    console.log(d);
    var YYYY = d.getFullYear();
    console.log(YYYY);
    var MM = d.getMonth();
    MM=MM+1;
    var DD = d.getDate();
    if(document.getElementById("gender").checked){
        var gender="male"
    }else{
        var gender="female"
    }
    var CC=(YYYY-1)/100+1;
   console.log(gender);

var day = parseInt((((CC/4) -2*CC-1) + ((5*YYYY/4) ) + ((26*(MM+1)/10)) + DD ) %7);
console.log(day);
// day=Math.round(d);
// console.log(day)
if(day===0 && gender==='female'){
  document.getElementById("Akan-Name").innerHTML='Akosua';
}else if(day===1 && gender==='female'){
    document.getElementById("Akan-Name").innerHTML='Adwoa';
}
else if(day===2 && gender==='female'){
    document.getElementById("Akan-Name").innerHTML='Abenaa';
}
else if(day===3 && gender==='female'){
    document.getElementById("Akan-Name").innerHTML='Akua';
}
else if(day===4 && gender==='female'){
    document.getElementById("Akan-Name").innerHTML='Yaa';
}
else if(day===5 && gender==='female'){
   document.getElementById("Akan-Name").innerHTML='Afua';
}
else if(day===6 && gender==='female'){
    document.getElementById("Akan-Name").innerHTML='Ama';
}
else if(day===0 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kwasi';
}
else if(day===1 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kwadwo';
}
else if(day===2 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kwabena';
}
else if(day===3 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kwaku';
}
else if(day===4 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Yaw';
}
else if(day===5 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kofi';
    
}
else if(day===6 && gender==='male'){
    document.getElementById("Akan-Name").innerHTML='Kwame';
}
}

