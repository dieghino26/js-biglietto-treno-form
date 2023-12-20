//recuperare elementi 
const nameField = document.getElementById("name")
const kmsField = document.getElementById("kms")
const ageField = document.getElementById("age")


const confirmButton = document.getElementById("confirm")

const ticketElements = document.getElementById("ticket-elements")
const passengerName = document.getElementById("passenger-name")
const passengerRate = document.getElementById("rate")
const passengerCar = document.getElementById("car")
const passengerCp = document.getElementById("cp")
const passengerPrice = document.getElementById("price")

//variabili
let pricePerKms = 0.21
let rateName = "Tariffa Ordinaria"

confirmButton.addEventListener("click", function () {
    const nameValue = nameField.value.trim()
    const kmsValue = parseInt(kmsField.value)
    const ageValue = ageField.value.trim()


    let price = pricePerKms * kmsValue


    if (ageValue === "junior") {
        rateName = "Tariffa Junior"
        price = price * 0.8
    } else if (ageValue === "senior") {
        rateName = "Tariffa Senior"
        price = price * 0.6
    }

    const car = Math.floor(Math.random() * 10) + 1
    const cp = Math.floor(Math.random() * (99999 - 10000)) + 10000


})