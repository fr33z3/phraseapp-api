import {client} from 'client'
import {Key, CollectionKey, KeyParams, SearchParams, UpdateKeyCollectionTagsParams, UpdateKeyCollectionLocaleParams, DeleteKeyCollectionParams} from 'types/key'

export async function listKeys(projectId: string) {
  const {data} = await client.get<CollectionKey[]>(`/projects/${projectId}/keys`)
  return data
}

export async function getKey(projectId: string, keyId: string) {
  const {data} = await client.get<Key>(`/projects/${projectId}/keys/${keyId}`)
  return data
}

export async function createKey(projectId: string, params: KeyParams) {
  const {data} = await client.post<Key>(`/projects/${projectId}/keys`, params)
  return data
}

export async function updateKey(projectId: string, keyId: string, params: Partial<KeyParams>) {
  const {data} = await client.patch<Key>(`/projects/${projectId}/keys/${keyId}`, params)
  return data
}

export async function deleteKey(projectId: string, keyId: string) {
  await client.delete(`/projects/${projectId}/keys/${keyId}`)
  return true
}

export async function searchKeys(projectId: string, params: SearchParams) {
  const {data} = await client.post<CollectionKey[]>(`/projects/${projectId}/keys/search`, params)
  return data
}

type UpdateKeyCollectionResponse = {
  records_affected: number
}

export async function addTagsToKeyCollection(projectId: string, {tags, ...params}: UpdateKeyCollectionTagsParams) {
  const {data} = await client.patch<UpdateKeyCollectionResponse>(`/projects/${projectId}/keys/tag`, {
    ...params,
    tags: tags.join(','),
  })
  return data
}

export async function removeTagsFromKeyCollection(projectId: string, {tags, ...params}: UpdateKeyCollectionTagsParams) {
  const {data} = await client.patch<UpdateKeyCollectionResponse>(`/projects/${projectId}/keys/untag`, {
    ...params,
    tags: tags.join(','),
  })
  return data
}

export async function includeLocaleOnKeyCollection(projectId: string, {tags, ...params}: UpdateKeyCollectionLocaleParams) {
  const {data} = await client.patch<UpdateKeyCollectionResponse>(`/projects/${projectId}/keys/include`, {
    ...params,
    tags: tags && tags.join(','),
  })
  return data
}

export async function excludeLocaleOnKeyCollection(projectId: string, {tags, ...params}: UpdateKeyCollectionLocaleParams) {
  const {data} = await client.patch<UpdateKeyCollectionResponse>(`/projects/${projectId}/keys/exclude`, {
    ...params,
    tags: tags && tags.join(','),
  })
  return data
}

export async function deleteKeyCollection(projectId: string, params: DeleteKeyCollectionParams) {
  const {data} = await client.delete<UpdateKeyCollectionResponse>(`/projects/${projectId}/keys`)
  return data
}

// export async function getKey(projectId: string, keyId: string, options: CommonQueryOptions = {}) {
//   return request<Key>(`/projects/${projectId}/keys/${keyId}`, 'get', options)
// }

// type KeyParams = {
//   branch: string
//   name: string
//   description: string
//   plural: boolean
//   name_plural: boolean
//   data_type: boolean
//   tags: string
//   max_characters_allowed: number
//   unformatted: boolean
//   xml_space_preserve: boolean
//   original_file: string
//   localized_format_key: string
// }

// export async function createKey(projectId: string, params: KeyParams) {
//   return request<Key>(`/projects/${projectId}/keys`, 'post', params)
// }

// export async function updateKey(projectId: string, keyId: string, params: KeyParams) {
//   return request<Key>(`/projects/${projectId}/keys/${keyId}`, 'patch', params)
// }
