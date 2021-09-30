import {client} from 'client'
import {Tag, TagParams, TagLocale, TagStatistics} from 'types/tag'

export async function listTags(projectId: string) {
  const {data} = await client.get<Tag[]>(`/projects/${projectId}/tags`)
  return data
}

export async function getTag(projectId: string, tagName: string) {
  const {data} = await client.get<Tag>(`/projects/${projectId}/tags/${tagName}`)
  return data
}

type CreateResponse = Tag & {
  statistics: {
    locale: TagLocale
    statistics: TagStatistics
  }
}

export async function createTag(projectId: string, params: TagParams) {
  const {data} = await client.post<CreateResponse>(`/projects/${projectId}/tags`, params)
  return data
}

export async function deleteTag(projectId: string, tagName: string) {
  await client.delete(`/projects/${projectId}/tags/${tagName}`)
  return true
}
