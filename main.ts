I2C_LCD1602.i2cLcdInit(39)
I2C_LCD1602.i2cLcdBacklightOff()
basic.pause(2000)
I2C_LCD1602.i2cLcdBacklightOn()
I2C_LCD1602.i2cLcdShowString("OSOYOO DHT11", 0, 0)
basic.pause(2000)
I2C_LCD1602.i2cLcdClear()
basic.forever(function () {
    I2C_LCD1602.i2cLcdShowString("T:", 0, 0)
    I2C_LCD1602.i2cLcdShowString("H:", 8, 0)
    I2C_LCD1602.i2cLcdShowNumber(Environment_IoT.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P8), 2, 1)
    basic.pause(2000)
    I2C_LCD1602.i2cLcdShowNumber(Environment_IoT.temperature(DHT11Type.DHT11_humidity, DigitalPin.P8), 10, 1)
    basic.pause(2000)
    I2C_LCD1602.i2cLcdClear()
})
