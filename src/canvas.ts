import { width, border, height, ratio } from './config'
import createSeal from './createSeal'

/**
 *
 * @param {*} companyName 公司名称
 * @param {*} taxNo 公司税号
 * @param {*} sealNo 印章号码
 *
 * @return {*} base64
 */
export interface CreateCanvasDomParams {
  companyName: string
  taxNo: string
  sealNo?: string
}
const createCanvasDom: (params: CreateCanvasDomParams) => string = params => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const ctxW = width + 2 * border
  const ctxH = height + 2 * border
  canvas.setAttribute('width', (ratio * ctxW).toString())
  canvas.setAttribute('height', (ratio * ctxH).toString())
  canvas.setAttribute('style', `width:${ctxW}px; height: ${ctxH}px;`)
  createSeal(ctx!, params.companyName, params.taxNo, params.sealNo)
  return canvas.toDataURL()
}

export default createCanvasDom
