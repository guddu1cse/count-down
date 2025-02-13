let min = document.getElementById('minute');
let sec = document.getElementById('second');
let interval = null;

setTimeout(() => {
    Array.from(document.getElementsByTagName("button")).forEach((btn) => {
        btn.addEventListener("mousedown", () => {
            btn.style.backgroundColor = "blue";
            console.log(btn.id + " clicked !");
        });
    });

    Array.from(document.getElementsByTagName("button")).forEach((btn) => {
        btn.addEventListener("mouseup", () => {
            setTimeout(() => {
                btn.style.backgroundColor = "transparent";
                console.log(btn.id + " realsed !");
            }, 100);
        });
    });
}, 200);

function startCount() {
    if (interval != null) {
        console.log("already strted !");
        return;
    }

    console.log("count started !");

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
    interval = null;
}