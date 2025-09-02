let dist = 0
let foreivet = 0
IR.IR_callbackUser(function (foreivet) {
	
})
basic.forever(function () {
    dist = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (dist >= 10) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 40)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 80)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 80)
    }
    foreivet = 0
    maqueenPlusV2.I2CInit()
})
