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
