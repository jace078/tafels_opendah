function oefenTafels() {
    var tafel = parseInt(document.getElementById("tafel").value);
    var output = document.getElementById("output");
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popupContent");

    output.innerHTML = ""; // Clear previous results

    if (!isNaN(tafel)) {
        for (var i = 1; i <= 10; i++) {
            output.innerHTML += `${tafel} x ${i} = ${tafel * i}<br>`;
        }
    } else {
        // Toon de popup
        popupContent.innerHTML = "Voer een geldig getal in.";
        popup.style.display = "block";
    }
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
