let Angle = 0
basic.forever(function () {
    Angle = -9 * input.temperature() + 270 + 0
    pins.servoWritePin(AnalogPin.P0, Angle)
    basic.showNumber(input.temperature())
})
