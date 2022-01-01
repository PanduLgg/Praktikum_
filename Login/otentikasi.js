function checkForm() {
    var username = 'pandu12345' ;
    var password = '12345' ;

    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("passwd").value;

    if ((username == userName) && (password == passWord)){
        window.open("succes.html");
    }
    else {
        alert("Something Wrong");
    }

}