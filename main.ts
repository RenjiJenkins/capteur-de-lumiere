let intensité = 0
function bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 0)
}
basic.forever(function () {
    intensité = pins.analogReadPin(AnalogPin.P0)
    if (intensité >= 700) {
        vert()
    } else if (intensité <= 700 && intensité >= 300) {
        bleu()
    } else {
        rouge()
    }
})
