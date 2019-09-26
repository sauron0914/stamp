import positionData from './position'
import { ratio, circleCenterX, circleCenterY } from './config'
import { FangSongFont, rads } from './utils'
import UnitConversion from './UnitConversion'

type PositionItem = typeof positionData[4][0]

const unitConversion = new UnitConversion()
const drawTextItem = (
  ctx: CanvasRenderingContext2D,
  el: string,
  item: PositionItem,
  len: number,
) => {
  ctx.save()
  ctx.font = `bold ${3.9 * ratio}mm ${FangSongFont}`
  ctx.textBaseline = 'top'
  ctx.translate(
    ratio * (circleCenterX + unitConversion.mmConversionPx(item.translate.x)),
    ratio * (circleCenterY + unitConversion.mmConversionPx(item.translate.y)),
  )
  ctx.rotate(rads(item.rotate))
  if (len > 16) {
    ctx.scale(0.8 * Math.sqrt(16 / len), 1.2)
  } else {
    ctx.scale(0.8, 1.2)
  }
  ctx.fillText(el, 0, 0)
  ctx.restore()
}

const drawTextCompanyName = (ctx: CanvasRenderingContext2D, arr: string[]) => {
  if (arr.length > 30 || arr.length < 4) {
    return
  }
  arr.forEach((el, index) => {
    drawTextItem(ctx, el, (positionData as any)[arr.length][index], arr.length)
  })
}

export default drawTextCompanyName
