document.getElementById('white').addEventListener("click", () => changebg("white"));
document.getElementById('blue').addEventListener("click", () => changebg("blue"));
document.getElementById('yellow').addEventListener("click", () => changebg("yellow"));
document.getElementById("grey").addEventListener("click", () => changebg("grey"));

function changebg(color) {
    document.getElementById("main").style.backgroundColor = color;
}



