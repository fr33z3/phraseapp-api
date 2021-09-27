import fetch from 'node-fetch'

let baseUrl = 'https://api.phrase.com/v2'
let accessToken = ''

type Options = {
  baseUrl?: string
  accessToken?: string
}

export function configure(options: Options) {
  if (options.accessToken) accessToken = options.accessToken
  if (options.baseUrl) baseUrl = options.baseUrl
}

type Method = 'get' | 'post' | 'delete' | 'put' | 'patch'
export async function request<Response>(path: string, method: Method, body: Record<string, any> = {}): Promise<Response> {
  const url = baseUrl + path

  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'X-PhraseApp-OTP': accessToken,
    }
  })
  const data = await response.json() as Response

  return data
}
