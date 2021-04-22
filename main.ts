radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("outdoor")) {
        radio.sendNumber(input.temperature())
    }
})
radio.setGroup(17)
basic.showNumber(17)
