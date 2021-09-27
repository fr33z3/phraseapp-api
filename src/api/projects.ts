import {request} from 'client'
import {Format} from 'types/format'
import {Project} from 'types/project'

export async function listProjects() {
  return request<Project[]>('/projects', 'get')
}

export async function getProject(id: string) {
  return request<Project>(`/projects/${id}`, 'get')
}

type ProjectParams = {
  name: string
  main_format: Format
  shares_translation_memory: boolean
  // Not finished input
}

export async function createProject(params: ProjectParams) {
  return request<Project>('/projects', 'post', params)
}

export async function updateProject(id: string, params: ProjectParams) {
  return request<Project>(`/projects/${id}`, 'patch', params)
}

export async function deleteProject(id: string) {
  return request(`/projects/${id}`, 'delete')
}
