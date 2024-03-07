let continues = true
const results = []
const currency = {
    countryOrigin: "",
    valueOrigin: 0,
    countryDestination: "",
    valueDestination: 0
}

function convert(){
    let answerCountryDes = prompt("Ingrese el nombre del pais de la moneda que quiere convertir: ")
    let answerValueDes = parseInt(prompt("Ingrese el valor de la moneda que desea adquirir (sin puntos ni comas): "))
    let answerCountry = prompt("Ingrese el nombre del pais de la moneda actual: ")
    let answerValue = parseInt(prompt("Ingrese el valor de la moneda que quiere convertir (sin puntos ni comas): "))

    let result = operation(answerValue, answerValueDes)
    currency.countryOrigin = answerCountryDes;
    currency.valueOrigin = answerValueDes;
    currency.countryDestination = answerCountry;
    currency.valueDestination = result;

    results.push(currency);
    
}

const operation = (answerValue, answerValueDes) => {
    return answerValue * answerValueDes
}

while(continues === true){
    let menu = parseInt(prompt("Ingrese: \n1. Para realizar la conversion. \n2. Ver su historial de conversiones \n3. Salir"))
    switch(menu){
        case 1:
            convert();
            break
        case 2: 
            for (let i = 0; i < results.length; i++){
                console.log("El pais cuya moneda usted busca convertir es: " + results[results.length-1].countryOrigin + ", donde el valor solicitado es: " + results[results.length-1].valueOrigin + ". \nEl pais con la moneda que usted cuenta es: " + results[results.length-1].countryDestination + ", arrojando una conversion de: " + results[results.length-1].valueDestination + ".")
                console.log("--------------------------------------------------")
            }
            break
        case 3: 
            let answer = confirm("¿Esta seguro que desea salir?")
            if(answer  == true){
                continues = false
                break
            }
            else {
                continue
            }
        default:
            alert("Opción no valida, vuelva a intentar")
    }
}