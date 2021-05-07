interface ServiceResponse<T = Record<string, any>> {
  data?: T
  error?: string
}

export default ServiceResponse
