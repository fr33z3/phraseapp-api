import {Project} from './project'

export type AccountLocale = {
  id: string
  name: string
  code: string
  project: Pick<Project, 'id' | 'name' | 'main_format' | 'created_at' | 'updated_at'>
}

type SourceLocale = {
  id: string
  name: string
  code: string
}

export type Locale = {
  id: string
  name: string
  code: string
  default: boolean
  main: boolean
  rtl: boolean
  plural_forms: string[]
  source_locale: SourceLocale
  created_at: Date
  updated_at: Date
}
