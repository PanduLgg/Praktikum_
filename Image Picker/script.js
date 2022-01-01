function choose() {
    var selected = document.getElementById("picture");
    var imgUrl = "";
    if (selected.value == "1") {
        imgUrl = "assets/1.jpg";
        alert("This is Naruto")
    } else if (selected.value == "2") {
        imgUrl = "assets/2.jpg";
        alert("This is Sasuke")
    } else if (selected.value == "3") {
        imgUrl = "assets/3.jpg";
        alert("This is Sakura")
    } else if (selected.value == "4") {
        imgUrl = "assets/4.jpg";
        alert("This is Kakashi ")
    } else if (selected.value == "5") {
        imgUrl = "assets/5.jpg";
        alert("This is Gaara")
    } else if (selected.value == "6") {
        imgUrl = "assets/6.jpg";
        alert("This is Neji")
    } else if (selected.value == "7") {
        imgUrl = "assets/7.jpg";
        alert("This is Rock Lee")
    } else if (selected.value == "8") {
        imgUrl = "assets/8.jpg";
        alert("This is Jiraiya")
    } else if (selected.value == "9") {
        imgUrl = "assets/9.jpg";
        alert("This is Itachi")
    } else {
        imgUrl = "assets/10.jpg";
        alert("This is Shikamaru")
    }
    
    document.getElementById("myImg").src = imgUrl;
}