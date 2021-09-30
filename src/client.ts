import axios, {AxiosResponse} from 'axios'

export const client = axios.create({
  baseURL: 'https://api.phrase.com/v2',
  headers: {
    'User-Agent': 'PhraseAPP Api Client',
  }
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const {response} = error
    if (response.status === 400 || response.status === 422) {
      return Promise.reject(response.data)
    } else {
      return Promise.reject(response.errors)
    }
  }
)

type Options = {
  baseUrl?: string
  accessToken?: string,
  userAgent?: string,
}

export function configure(options: Options) {
  if (options.accessToken) {
    client.defaults.headers.common['Authorization'] = `token ${options.accessToken}`
  }
  if (options.userAgent) client.defaults.headers.common['User-Agent'] = options.userAgent
  if (options.baseUrl) client.defaults.baseURL = options.baseUrl
}
