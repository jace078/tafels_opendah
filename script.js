function printTafel(tafel) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `${tafel} x ${i} = ${tafel * i}<br>`;
    }
    document.getElementById("output").innerHTML = output;
}

function controleerTafel(tafel) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `<label for="antwoord${i}">Wat is ${tafel} x ${i}?</label>
                   <input type="number" id="antwoord${i}" data-juiste-antwoord="${tafel * i}"><br>`;
    }
    output += `<button id="controleerButton" onclick="controleerAntwoorden()">Controleer antwoorden</button>`;
    document.getElementById("output").innerHTML = output;
}
function controleerAntwoorden() {
    let juiste = 0;
    let fouten = [];
    for (let i = 1; i <= 10; i++) {
        let antwoord = parseInt(document.getElementById(`antwoord${i}`).value);
        let juisteAntwoord = parseInt(document.getElementById(`antwoord${i}`).getAttribute("data-juiste-antwoord"));
        if (!isNaN(antwoord) && antwoord === juisteAntwoord) {
            juiste++;
        } else {
            fouten.push(i);
        }
    }

    let resultaat = `Aantal juiste antwoorden: ${juiste}<br>`;
    if (fouten.length > 0) {
        resultaat += `Foute antwoorden op vraag(en): ${fouten.join(", ")}`;
    } else {
        resultaat += "Alle antwoorden zijn juist!";
    }

    document.getElementById("output").innerHTML = resultaat;
    document.getElementById("controleerButton").style.display = "none"; // Verberg de knop voor het controleren van antwoorden na het controleren
}

function oefenen() {
    let tafel = parseInt(document.getElementById("tafel").value);
    let optie = document.querySelector('input[name="optie"]:checked').value;

    if (isNaN(tafel)) {
        document.getElementById("popupContent").innerHTML = "Voer een geldig getal in.";
        document.getElementById("popup").style.display = "block";
    } else {
        document.getElementById("popup").style.display = "none";

        if (optie === "1") {
            printTafel(tafel);
            document.getElementById("controleerButton").style.display = "none"; // Verberg de knop voor het controleren van antwoorden
        } else if (optie === "2") {
            controleerTafel(tafel);
        }
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("startButton").addEventListener("click", oefenen);
document.getElementById("tafel").addEventListener("change", function() {
    let optie = document.querySelector('input[name="optie"]:checked').value;
    if (optie === "2") {
        controleerTafel(parseInt(this.value));
    }
});
