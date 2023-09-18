function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (!x.match("[@][a-z]+[.]com$")) {
    alert("invalid email");
    return false;
    }
    myPrint(x);
    } 
    
    if(agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus")){
    window.alert("Firefox is being used")
    }
    else if( agentHas("CriOS") || agentHas("Chrome") || !!window.chrome){
    window.alert("Windows is being used")
    
    }
    
    function agentHas(keyword) {
    return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
    }
    window.onload = function(){ 
    document.getElementById("id").innerHTML = document.querySelector("#id").innerHTML+ "!"
    }
    
    function myPrint(data) {
    newwin = window.open("");
    newwin.document.write(data);
    newwin.print();
    newwin.close();
    }
    