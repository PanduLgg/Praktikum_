function submit() {

    var username = document.getElementById("nama").value;
    var email = document.getElementById("mail").value;
    var berangkat = document.getElementById("jam").value;
    var tempat = document.getElementById("tujuan").value;
    var jumlah = document.getElementById("tiket").value;
    var hasil = document.getElementById("hasil");

    if (username >= 30 ) {
        alert("Characters Max 30");
    }
    else if (username == ""){ 
        document.getElementById("notname").innerText = (" *")
    }

    else if (email == "") {
        document.getElementById("notmail").innerText = (" *")
    }


    else if (berangkat == "00:00") {
        document.getElementById("notjam").innerText = (" *")
    } 

    else if (tempat == "") {
        document.getElementById("nottempat").innerText = (" *")
    }

    else if (jumlah == "0") {
        document.getElementById("nottiket").innerText = (" *")
    }
    else if(jumlah > 10) {
        document.getElementById("nottiket").innerText = (" *Max 30")
    }
    else {
        hasil.style.display = "block";
    document.getElementById("hasil").innerHTML = "Nama : " + document.getElementById("nama").value +"<br><br>"
    document.getElementById("hasil").innerHTML += "Email : " + document.getElementById("mail").value +"<br><br>"
    document.getElementById("hasil").innerHTML += "Keberangkatan Pukul : " + document.getElementById("jam").value +"<br><br>"
    document.getElementById("hasil").innerHTML += "Tujuan Kota : " + document.getElementById("tujuan").value + "<br><br>"
    document.getElementById("hasil").innerHTML += "Jumlah Tiket : " + document.getElementById("tiket").value + "<br><br>"

    }
}
