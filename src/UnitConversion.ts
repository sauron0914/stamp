class UnitConversion {
  screen: any = window.screen

  /**
   * 获取DPI
   * @returns {Array}
   */
  conversionGetDPI() {
    const arrDPI = []
    if (this.screen.deviceXDPI) {
      arrDPI[0] = this.screen.deviceXDPI
      arrDPI[1] = this.screen.deviceYDPI
    } else {
      const tmpNode = document.createElement('div')
      tmpNode.style.cssText =
        'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
      document.body.appendChild(tmpNode)
      arrDPI[0] = tmpNode.offsetWidth
      arrDPI[1] = tmpNode.offsetHeight
      tmpNode.parentNode!.removeChild(tmpNode)
    }
    return arrDPI
  }

  /**
   * px转换为mm
   * @param value
   * @returns {number}
   */
  pxConversionMm(value: number) {
    const inch = value / this.conversionGetDPI()[0]
    const cValue = inch * 25.4
    return cValue
  }

  /**
   * 获取DPI
   * @returns {Array}
   */
  mmConversionPx(value: number) {
    const inch = value / 25.4
    const cValue = inch * this.conversionGetDPI()[0]
    return cValue
  }
}

export default UnitConversion
