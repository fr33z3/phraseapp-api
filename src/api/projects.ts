import {client} from 'client'
import {Project, ProjectParams} from 'types/project'

export async function listProjects() {
  const {data} = await client.get<Project[]>('/projects')
  return data
}

export async function getProject(id: string) {
  const {data} = await client.get<Project>(`/projects/${id}`)
  return data
}

export async function createProject(params: ProjectParams) {
  const {data} = await client.post<Project>('/projects', params)
  return data
}

export async function updateProject(id: string, params: Partial<ProjectParams>) {
  const {data} = await client.patch(`/projects/${id}`, params)
  return data
}

export async function deleteProject(id: string) {
  await client.delete(`/projects/${id}`)
  return true
}
