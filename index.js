var ul = document.getElementById("list-container")
var text = document.getElementById("text")
var small = document.querySelector("small")
function add() {
    var inputValue = text.value.trim()
    if (inputValue === "") {
        small.style.display = "block"
    }
    else {
        small.style.display = "none"
        var h1 = document.createElement("li")
        h1.innerHTML = inputValue + "<button onclick= dele(event)>Delete </button>"
        ul.appendChild(h1)
        text.value = ""
    }
}

function dele(event) {
    event.target.parentElement.remove()
}