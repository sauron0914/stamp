interface CreateCanvasDomParams {
  companyName: string
  taxNo: string
  sealNo?: string
  ratio?: number
}
declare const createCanvasDom: (params: CreateCanvasDomParams) => string

export default createCanvasDom
