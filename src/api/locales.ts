import {client} from 'client'
import {AccountLocale, Locale, LocaleStatistics} from 'types/locale'

export async function listAccountLocales(accountId: string) {
  const {data} = await client.get<AccountLocale>(`/accounts/${accountId}/locales`)
  return data
}

export async function listLocales(projectId: string) {
  const {data} = await client.get<Locale[]>(`/projects/${projectId}/locales`)
  return data
}

export async function getLocale(projectId: string, localeId: string) {
  const {data} = await client.get<Locale>(`/projects/${projectId}/locales/${localeId}`)
  return data
}

type LocaleParams = {
  branch?: string
  name: string
  code: string
  default?: boolean
  main?: boolean
  rtl?: boolean
  source_locale_id?: string
  unverify_new_translations?: boolean
  unverify_updated_translations?: boolean
  autotranslate?: boolean
}

type MutateLocaleResponse = Locale & {
  statistics: LocaleStatistics
}
export async function createLocale(projectId: string, params: LocaleParams) {
  const {data} = await client.post<MutateLocaleResponse>(`/projects/${projectId}/locales`, params)
  return data
}

export async function updateLocale(projectId: string, localeId: string, params: Partial<LocaleParams>) {
  const {data} = await client.patch<MutateLocaleResponse>(`/projects/${projectId}/locales/${localeId}`, params)
  return data
}

export async function deleteLocale(projectId: string, localeId: string) {
  const {data} = await client.delete(`/projects/${projectId}/locales/${localeId}`)
  return true
}
