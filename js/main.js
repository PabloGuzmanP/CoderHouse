let botonFormConvertir = document.getElementById("showConversionForm")
let botonHistorial = document.getElementById("showConversionHistory")
let formConvertir = document.getElementById("conversionForm")
let botonConvertir = document.getElementById("convert")
let botonReiniciar = document.getElementById("restart")

formConvertir.style.display = "none"

const results = [];

function convert() {
    let answerCountryDes = document.getElementById("countryDestination").value;
    let answerValueDes = parseInt(document.getElementById("valueDestination").value);
    let answerCountry = document.getElementById("countryOrigin").value;
    let answerValue = parseInt(document.getElementById("valueOrigin").value);

    const currency = {
        countryOrigin: answerCountry,
        valueOrigin: answerValueDes,
        countryDestination: answerCountryDes,
        valueDestination: operation(answerValue, answerValueDes)
    };

    results.push(currency);

    addToLocalStorage(currency);
}

function addToLocalStorage(data){
    let conversionCounter = parseInt(localStorage.getItem("conversionCounter") || 0)
    conversionCounter++

    localStorage.setItem("PaisOrigen_" + conversionCounter, data.countryOrigin)
    localStorage.setItem("ValorOrigen_" + conversionCounter, data.valueOrigin)
    localStorage.setItem("PaisDestino_" + conversionCounter, data.countryDestination)
    localStorage.setItem("ValorDestino_" + conversionCounter, data.valueDestination)

    localStorage.setItem("conversionCounter", conversionCounter)
}

const operation = (answerValue, answerValueDes) => {
    return answerValue * answerValueDes;
};

botonFormConvertir.onclick = () => {
    formConvertir.style.display = "block"
}

botonConvertir.onclick = () => {
    convert()
    let convertHTML = document.createElement("div")
    for (let i = 0; i < results.length; i++) {
        convertHTML.innerHTML += `<p>El país cuya moneda usted busca convertir es: ${results[i].countryDestination}, donde el valor solicitado es: ${results[i].valueOrigin}. <br> El país con la moneda que usted cuenta es: ${results[i].countryOrigin}, arrojando una conversión de: ${results[i].valueDestination}.</p><hr>`;
    }
    formConvertir.appendChild(convertHTML)
}

botonHistorial.onclick = () =>{
    alert("Abrir el localStorage de la consola para ver el historial")
    console.log(results)
}

botonReiniciar.onclick = () => {
    document.getElementById("countryDestination").value = "";
    document.getElementById("valueDestination").value = "";
    document.getElementById("countryOrigin").value = "";
    document.getElementById("valueOrigin").value = "";

    formConvertir.remove()
};