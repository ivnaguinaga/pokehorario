window.onload = function() { alert("helloworld") }


function imagen() {
    fecha = new Date();
    hora = fecha.getHours();
    if (hora >= 0 && hora <= 7) { //imagen desde la 1am hasta las 10am
        document.getElementsByClassName("flex").style.backgroundColor = "black";
    }
    if (hora >= 7 && hora <= 24) { //imagen desde las 7pm hasta las 12pm
        document.getElementsByClassName("flex").style.backgroundColor = "yellow";
    }
}

window.onload = imagen();