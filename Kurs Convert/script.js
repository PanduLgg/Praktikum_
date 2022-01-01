function kurs(){
    y = document.getElementById("valas").value;
    return y;
}
    
function hitung(){
y = kurs();
    
x = document.getElementById("nilai").value;
    
if(x == ""){
    document.getElementById("rupiah").value = "";
}else{
    switch(y){
        case "Dollar":
            document.getElementById("rupiah").value = x * 9915;
        break;
    
        case "Singapore":
            document.getElementById("rupiah").value = x * 13472;
        break;
    
        case "Ringgit":
            document.getElementById("rupiah").value = x * 874;
        break;
    
        case "Yen":
            document.getElementById("rupiah").value = x * 120;
        break;
    
        case "Euro":
            document.getElementById("rupiah").value = x * 15888;
        break;

        case "Riyal":
            document.getElementById("rupiah").value = x * 3592;
        break;
    }
}
}