import {request} from 'client'
import {Key} from 'types/key'
import {CommonQueryOptions} from 'types/common'

type ListKeysOptions = CommonQueryOptions & {
  sort?: keyof Key
  order?: 'asc' | 'desc'
  q?: string
  locale_id?: string
}

export async function listKeys(projectId: string, options: ListKeysOptions = {}) {
  return request<Key[]>(`/projects/${projectId}/keys`, 'get', options)
}

export async function getKey(projectId: string, keyId: string, options: CommonQueryOptions = {}) {
  return request<Key>(`/projects/${projectId}/keys/${keyId}`, 'get', options)
}

type KeyParams = {
  branch: string
  name: string
  description: string
  plural: boolean
  name_plural: boolean
  data_type: boolean
  tags: string
  max_characters_allowed: number
  unformatted: boolean
  xml_space_preserve: boolean
  original_file: string
  localized_format_key: string
}

export async function createKey(projectId: string, params: KeyParams) {
  return request<Key>(`/projects/${projectId}/keys`, 'post', params)
}

export async function updateKey(projectId: string, keyId: string, params: KeyParams) {
  return request<Key>(`/projects/${projectId}/keys/${keyId}`, 'patch', params)
}
