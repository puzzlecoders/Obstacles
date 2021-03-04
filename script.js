let directioning = 0;
let field_height = 500;
let player_size = 100;
let curent_y = 0;
let boardDOM = document.getElementById("parent")
let childDOM = document.getElementById("child")

function keyboard() {
    document.addEventListener("keyup", function move(element) {
        if (element.keyCode == 38) {
            moveUp();
        } else if (element.keyCode == 40) {
            moveDown();
        }

        updateDOM();
    })
}

function setup() {
    // setUp Board
        boardDOM.style.height = field_height + "px";

    //setup player
    childDOM.style.height = player_size + "px";
    childDOM.style.width = player_size + "px";

}

function updateDOM() {
    // check wether within boundries 
    if (directioning < 0 ) {
        directioning = 0;
    }
    if (directioning > field_height - player_size) {
        directioning = field_height - player_size;
    }
    let child = document.getElementById("child");
    child.style.top = directioning + "px";
}

function moveUp(by = 100) {
    directioning -= by;
}

function moveDown(by = 100) {
    directioning += by;
}

window.onload = function () {
    setup()
    keyboard()
    setInterval(function(){ moveDown(10) ;updateDOM(); }, 250);
}
