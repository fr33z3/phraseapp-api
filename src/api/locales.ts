import {request} from 'client'
import {AccountLocale, Locale} from 'types/locale'

export async function listAccountLocales(accountId: string) {
  return request<AccountLocale[]>(`/accoutns/${accountId}/locales`, 'get')
}

type ProjectLocalesOptions = {
  branch?: string
}
export async function listLocales(projectId: string, options: ProjectLocalesOptions = {}) {
  return request<Locale[]>(`/projects/${projectId}/locales`, 'get', options)
}

export async function getLocale(projectId: string, localeId: string, options: ProjectLocalesOptions = {}) {
  return request<Locale>(`/projects/${projectId}/locales/${localeId}`, 'get', options)
}

type LocaleParams = {
  branch: string
  name: string
  code: string
  default: boolean
  main: boolean
  rtl: boolean
  source_locale_id: string
  unverify_new_translations: boolean
  unverify_updated_translations: boolean
  autotranslate: boolean
}
export async function createLocale(projectId: string, params: LocaleParams) {
  return request<Locale>(`/projects/${projectId}/locales`, 'post', params)
}

export async function updateLocale(projectId: string, localeId: string, params: LocaleParams) {
  return request<Locale>(`/projects/${projectId}/locales/${localeId}`, 'patch', params)
}

export async function deleteLocale(projectId: string, localeId: string, options: ProjectLocalesOptions = {}) {
  return request(`/projects/${projectId}/locales/${localeId}`, 'delete', options)
}
