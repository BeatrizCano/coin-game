let counterFace = 0;
let counterCross = 0;

const result = document.getElementById("result");
const counter = document.getElementById("counter");
const coin = document.getElementById("coin-img");

counter.innerHTML = "Face counter: 0 <br> Cross counter: 0";

function flipTheCoin() {
    const result = Math.random();

    if(result < 0.5) {
        counterFace++;
        coin.src = "img/face.png";
    }

    else {
        counterCross++;
        coin.src = "img/cross.png";
    }

    coin.classList.add("rotating");

    setTimeout(function() {
        coin.classList.remove("rotating");
    }, 1000);

    counter.innerHTML = `Face counter: ${counterFace} <br> Cross counter: ${counterCross}`;
}

    function toReset() {
        counterFace = 0;
        counterCross = 0;
        coin.src = "img/face.png";
        counter.innerHTML = "Face counter: 0 <br> Cross counter: 0";
    }
