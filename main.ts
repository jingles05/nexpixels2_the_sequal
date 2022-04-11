input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.shift(1)
    strip.show()
    strip.setPixelColor(0, neopixel.rgb(100, 50, 168))
    strip.setPixelColor(0, neopixel.rgb(128, 224, 210))
})
input.onGesture(Gesture.Shake, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
