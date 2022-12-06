radio.onReceivedString(function (receivedString) {
    if (receivedString == "lightsON") {
        네모_neo.showColor(neopixel.colors(NeoPixelColors.Black))
        for (let index = 0; index <= 48; index++) {
            원형_neo.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
            원형_neo.show()
            basic.pause(40)
        }
    }
    if (receivedString == "colorON") {
        for (let index = 0; index <= 48; index++) {
            원형_neo.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
            원형_neo.show()
            basic.pause(100)
        }
    }
    if (receivedString == "reset") {
        원형_neo.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let 네모_neo: neopixel.Strip = null
let 원형_neo: neopixel.Strip = null
radio.setGroup(77)
radio.setTransmitPower(7)
원형_neo = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
원형_neo.setBrightness(20)
원형_neo.showColor(neopixel.colors(NeoPixelColors.Black))
네모_neo = neopixel.create(DigitalPin.P16, 64, NeoPixelMode.RGB)
네모_neo.setBrightness(20)
let range_off_1 = 네모_neo.range(1, 15)
let range_off_2 = 네모_neo.range(48, 63)
let range_on = 네모_neo.range(16, 47)
range_off_1.showColor(neopixel.colors(NeoPixelColors.Black))
range_off_2.showColor(neopixel.colors(NeoPixelColors.Black))
range_on.showColor(neopixel.colors(NeoPixelColors.Black))
