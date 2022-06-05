window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed <= 122)|| (keyPressed >=65 && keyPressed <=90)) {
        document.getElementById("key").innerHTML = "You pressed a Alphabetical key."
    }
    else if (keyPressed >=48 && keyPressed <= 57) {
        document.getElementById("key").innerHTML = "You pressed a Number key"
    }
    else if (keyPressed >=37 && keyPressed <=40) {
        document.getElementById("key").innerHTML = "You pressed a Arrow key"
    }
    else if (keyPressed == 17) {
        document.getElementById("key").innerHTML = "You pressed a special key"
    }
    else if (keyPressed == 18) {
        document.getElementById("key").innerHTML = "You pressed a special key"
    }
    else if (keyPressed == 27) {
        document.getElementById("key").innerHTML = "You pressed a special key"
    }
    else {
        document.getElementById("key").innerHTML = "You pressed another key "
    }
}