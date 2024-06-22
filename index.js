const inputFibo = document.getElementById('input-fibo')
const btnValidate = document.getElementById('btn-validate')
const showNumber = document.getElementById('show-number')
const resultSerie = document.getElementById('result-serie')
const msgError = document.getElementById('msg-error')

btnValidate.addEventListener('click', () => {

    let arrayFibo = [0, 1]
    let result = 0;
    let stringData = "0, 1";

    const fiboNumber = inputFibo.value;

    if (isNaN(fiboNumber) || fiboNumber <= 0) {
        msgError.textContent = "Please add a number greater than 0."
        msgError.style.backgroundColor = "#ff8e8e"
        return
    }

    if (fiboNumber == 1) {
        stringData = "0"
        resultSerie.textContent = stringData
        msgError.style.backgroundColor = "transparent"
        msgError.textContent = ""
        return
    }

    msgError.style.backgroundColor = "transparent"
    msgError.textContent = ""
    showNumber.textContent = fiboNumber



    for (let i = 0; i < fiboNumber - 2; i++) {

        result = arrayFibo[i] + arrayFibo[i + 1]

        arrayFibo.push(result)

        stringData += ", " + result
    }

    resultSerie.textContent = stringData
})




