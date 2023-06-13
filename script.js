var array = document.querySelectorAll(".drum");
for (var i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function clicked() {
        animations(this.innerHTML);
        switch (this.innerHTML) {
            case 'w':
                var x = new Audio('./sounds/tom-1.mp3');
                x.play();
                break;
            case 'a':
                var x = new Audio('./sounds/tom-2.mp3');
                x.play();
                break;
            case 's':
                var x = new Audio('./sounds/tom-3.mp3');
                x.play();
                break;
            case 'd':
                var x = new Audio('./sounds/tom-4.mp3');
                x.play();
                break;
            case 'j':
                var x = new Audio('./sounds/kick-bass.mp3');
                x.play();
                break;
            case 'k':
                var x = new Audio('./sounds/snare.mp3');
                x.play();
                break;
            case 'l':
                var x = new Audio('./sounds/crash.mp3');
                x.play();
                break;

            default:
                break;
        }
    });
}

document.addEventListener("keypress", function pressed(e) {
    detectKey(e.key);
    animations(e.key);
});

function detectKey(keypressed) {
    switch (keypressed) {
        case 'w':
            var x = new Audio('./sounds/tom-1.mp3');
            x.play();
            break;
        case 'a':
            var x = new Audio('./sounds/tom-2.mp3');
            x.play();
            break;
        case 's':
            var x = new Audio('./sounds/tom-3.mp3');
            x.play();
            break;
        case 'd':
            var x = new Audio('./sounds/tom-4.mp3');
            x.play();
            break;
        case 'j':
            var x = new Audio('./sounds/kick-bass.mp3');
            x.play();
            break;
        case 'k':
            var x = new Audio('./sounds/snare.mp3');
            x.play();
            break;
        case 'l':
            var x = new Audio('./sounds/crash.mp3');
            x.play();
            break;

        default:
            console.log(keypressed);
            break;
    }
}

function animations(pressedKey) {
    document.querySelector("." + pressedKey).classList.toggle("pressed");
    setTimeout(function () {
        document.querySelector("." + pressedKey).classList.toggle("pressed");
    }, 100);
}