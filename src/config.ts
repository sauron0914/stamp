import UnitConversion from './UnitConversion'

const unitConversion = new UnitConversion()
export const width = Math.round(unitConversion.mmConversionPx(38.5))
export const height = Math.round(unitConversion.mmConversionPx(30))
export const border = Math.round(unitConversion.mmConversionPx(1))
export const circleXRadius = width / 2
export const circleYRadius = height / 2
export const circleCenterX = circleXRadius + border
export const circleCenterY = circleYRadius + border
export const ratio = 4
