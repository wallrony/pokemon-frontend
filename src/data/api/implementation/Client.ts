import Axios from 'axios'

const Client = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
})

async function apiGet<T>(path: string, headers?: Record<string, string>): Promise<T> {
  headers = {
    ...getDefaultHeaders(),
    ...headers,
  }

  const response = await Client.get<T>(
    path,
    { headers }
  )

  return response.data
}

function getDefaultHeaders() {
  const headers = {}

  headers['Content-Type'] = 'application/json'

  return headers;
}

export {
  apiGet
}
