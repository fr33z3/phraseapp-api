import {client} from 'client'
import {Format} from 'types/format'
import {Project} from 'types/project'

export async function listProjects() {
  const {data} = await client.get<Project[]>('/projects')
  return data
}

export async function getProject(id: string) {
  const {data} = await client.get<Project>(`/projects/${id}`)
  return data
}

type ProjectParams = {
  name: string
  main_format?: Format
  shares_translation_memory?: boolean
  account_id? :string
  source_project_id?: string
  workflow?: 'simple' | 'review'
  machine_translation_enabled?: boolean
  enable_branching?: boolean
  protect_master_branch?: boolean
  enable_all_data_type_translation_keys_for_translators?: boolean
  enable_icu_message_format?: boolean
  zero_plural_form_enabled?: boolean
  autotranslate_enabled?: boolean
  autotranslate_check_new_translation_keys?: boolean
  autotranslate_check_new_uploads?: boolean
  autotranslate_check_new_locales?: boolean
  autotranslate_mark_as_unverified?: boolean
  autotranslate_use_machine_translation?: boolean
  autotranslate_use_translation_memory?: boolean
  smart_suggest_enabled?: boolean
  smart_suggest_use_machine_translation?: boolean
}


export async function createProject(params: ProjectParams) {
  const {data} = await client.post<Project>('/projects', params)
  return data
}

export async function updateProject(id: string, params: ProjectParams) {
  const {data} = await client.patch(`/projects/${id}`, params)
  return data
}

export async function deleteProject(id: string) {
  await client.delete(`/projects/${id}`)
  return true
}
