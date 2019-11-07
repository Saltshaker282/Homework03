

function generate(){
    let complexity = document.getElementById("slider").value;

    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var n = 0; n <= complexity; n++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

    
    }
    document.getElementById("display")
    
}