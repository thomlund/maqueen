let dist = 0
basic.forever(function () {
    dist = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (dist >= 10) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 40)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    }
})
