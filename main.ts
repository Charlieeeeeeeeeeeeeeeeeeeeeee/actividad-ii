input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bienvenid@")
    basic.pause(200)
    basic.showString("Conversion $")
    Pesos = Dólares * 20
    basic.showString("" + (Pesos))
    basic.pause(200)
    basic.showString("Menos comision $")
    if (Pesos >= 1000) {
        Total = Pesos * 0.95
        basic.showString("" + (Total))
    } else if (Pesos >= 500) {
        Total = Pesos * 0.97
        basic.showString("" + (Total))
    } else {
        if (Pesos >= 100) {
            Total = Pesos * 0.99
            basic.showString("" + (Total))
        }
    }
})
let Total = 0
let Pesos = 0
let Dólares = 0
Dólares = 30
