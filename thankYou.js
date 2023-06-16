window.onload = function exampleFunction() {
    document.getElementById("rating").innerHTML = "You've selected " + localStorage.getItem("button") + " out of 5";
}