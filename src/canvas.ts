import { width, border, height, ratio } from './config'
import createSeal from './createSeal'

/**
 *
 * @param {*} companyName 公司名称
 * @param {*} taxNo 公司税号
 * @param {*} sealNo 印章号码
 * @param {*} ratio 几倍图
 * @return {*} base64
 */
export interface CreateCanvasDomParams {
  companyName: string
  taxNo: string
  sealNo?: string
  ratio?: number
}
const createCanvasDom: (params: CreateCanvasDomParams) => string = params => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const ctxW = width + 2 * border
  const ctxH = height + 2 * border
  const ratioTemp = params.ratio || ratio
  canvas.setAttribute('width', (ratioTemp * ctxW).toString())
  canvas.setAttribute('height', (ratioTemp * ctxH).toString())
  canvas.setAttribute('style', `width:${ctxW}px; height: ${ctxH}px;`)
  createSeal(ctx!, params.companyName, params.taxNo, params.sealNo)
  return canvas.toDataURL()
}

export default createCanvasDom
