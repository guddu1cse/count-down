let min = document.getElementById('minute');
let sec = document.getElementById('second');

let interval = null;

function startCount() {
    console.log("count started !")
    interval = setInterval(() => {
        if (sec.value > 0) {
            sec.value--;
        } else {
            if (min.value > 0) {
                min.value--;
            } else {
                clearInterval(interval);
                alert("Countdown finished !");
            }
            sec.value = 59;
        }
        document.getElementsByTagName("title")[0].innerText = `${min.value}:${sec.value}`;
    }, 1000);
}

function stopCount() {
    if (interval) {
        clearInterval(interval);
    }
}

function resetCount() {
    min.value = 1;
    sec.value = 30;
    stopCount();
}