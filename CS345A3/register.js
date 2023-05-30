var modal = document.getElementById("myModal");
var unfinished = document.getElementById("unfinishedRegister");

function unfinishedFeature(){
    unfinished.style.display = "block";
}

function openRegister(){
    modal.style.display = "block";
}

// Closes form when clicking outside it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === unfinished) {
        unfinished.style.display = "none";
    }
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}