const startReadingButton = document.getElementById("start-reading");
const isbnInput = document.getElementById("isbn");
const autoTurnButton = document.getElementById("auto-turn");

startReadingButton.addEventListener("click", initialize);

google.books.load({ "language": "en" });

function nextStep(viewer) {
    window.setTimeout(function () {
        viewer.nextPage()
        nextStep(viewer);
    }, 3000)
}

function alertNotFound() {
    alert("Book not found!");
}

function initialize() {
    const isbnValue = isbnInput.value.trim();
    if (isbnValue) {
        const viewer = new google.books.DefaultViewer(document.getElementById("viewerCanvas"));
        viewer.load("ISBN:" + isbnValue, alertNotFound);
        autoTurnButton.addEventListener("click", function () {
            nextStep(viewer);
        });
    } else {
        alert("Please enter an ISBN.");
    }
}

function enterKeyInitialize(event){
    if(event.key === 'Enter'){
        initialize();
    }
}