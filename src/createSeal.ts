import drawEllipse from './drawEllipse'
import { FangSongFont } from './utils'
import UnitConversion from './UnitConversion'
import drawTextCompanyName from './drawTextCompanyName'
import {
  ratio,
  circleCenterX,
  circleCenterY,
  circleXRadius,
  circleYRadius,
  border,
} from './config'

const unitConversion = new UnitConversion()
const createSeal = (
  ctx: CanvasRenderingContext2D,
  companyName: string,
  taxNo: string,
  sealNo?: string,
) => {
  ctx.strokeStyle = '#f00'
  ctx.fillStyle = '#f00'
  drawEllipse(
    ctx,
    circleCenterX,
    circleCenterY,
    circleXRadius,
    circleYRadius,
    border,
  )

  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'

  // 绘制公司名称
  drawTextCompanyName(ctx, companyName.split(''))

  // 绘制税号
  ctx.save()
  ctx.font = `${3.8 * ratio}mm Arial`
  ctx.fillText(
    taxNo,
    ratio * circleCenterX,
    ratio * (circleCenterY + unitConversion.mmConversionPx(0.1)),
    unitConversion.mmConversionPx(26 * ratio),
  )
  ctx.restore()

  // 绘制发票专用章字样
  ctx.save()
  ctx.font = `${4.6 * ratio}mm ${FangSongFont}`
  ctx.textBaseline = 'top'
  ctx.fillText(
    '发票专用章',
    ratio * (circleCenterX + unitConversion.mmConversionPx(-0.2)),
    ratio * (circleCenterY + unitConversion.mmConversionPx(3.8)),
    unitConversion.mmConversionPx(ratio * 19),
  )
  ctx.restore()

  // 绘制号码
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(Number(sealNo))) {
    ctx.save()
    ctx.font = `${2.5 * ratio}mm Arial`
    ctx.textBaseline = 'top' // 设置文本的垂直对齐方式
    ctx.fillText(
      `（ ${sealNo} ）`,
      ratio * circleCenterX,
      ratio * (circleCenterY + unitConversion.mmConversionPx(11)),
    )
    ctx.restore()
  }
}

export default createSeal
