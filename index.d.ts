interface CreateCanvasDomParams {
  companyName: string
  taxNo: string
  id: string
  sealNo?: string
}
declare const createCanvasDom: (params: CreateCanvasDomParams) => void

export default createCanvasDom
