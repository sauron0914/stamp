import { ratio } from './config'
/**
 *
 * @param {*} context canvas画布
 * @param {*} x 圆心x位置
 * @param {*} y 圆心y位置
 * @param {*} XAxis x轴半径长度
 * @param {*} YAxis y轴半径长度
 */
const drawEllipse = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  XAxis: number,
  YAxis: number,
  border: number,
) => {
  context.save()
  const r = XAxis > YAxis ? XAxis : YAxis
  const ratioX = XAxis / r
  const ratioY = YAxis / r
  context.scale(ratio * ratioX, ratio * ratioY)
  // eslint-disable-next-line no-param-reassign
  context.lineWidth = border
  context.beginPath()
  context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false)
  context.closePath()
  context.stroke()
  context.restore()
}

export default drawEllipse
