interface CreateCanvasDomParams {
  companyName: string
  taxNo: string
  sealNo?: string
}
declare const createCanvasDom: (params: CreateCanvasDomParams) => string

export default createCanvasDom
