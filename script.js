function changePhoto() { 
    let before = "./img/photoB.jpeg";
    let after = "./img/photoA.jpeg";
    let photo = document.getElementById("home-img");

    if (photo.type == "before") {
        photo.src = after; 
        photo.type = "after";
    } else {
        photo.src = before; 
        photo.type = "before";
    }
}

var i = 0;
var txt = "I'm Stevannie";
var speed = 200;

function typeWriter() {
    
    if (i < txt.length) {
        document.getElementById("home-two").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
