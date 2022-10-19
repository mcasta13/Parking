input.onButtonPressed(Button.A, function () {
    if (clients < aforament) {
        clients += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (clients >= 1) {
        clients += -1
    }
})
let lliures = 0
let aforament = 0
let clients = 0
clients = 0
aforament = 10
basic.forever(function () {
    lliures = aforament - clients
    basic.showNumber(lliures)
    if (clients == aforament) {
        basic.showString("PLE")
    }
})
