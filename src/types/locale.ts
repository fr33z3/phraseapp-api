import {Project} from './project'
import {Maybe} from './common'

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
  source_locale: Maybe<SourceLocale>
  created_at: Date
  updated_at: Date
}

export type LocaleStatistics = {
  keys_total_count: number
  keys_untranslated_count: number
  missing_words_count: number
  translations_completed_count: number
  translations_unverified_count: number
  unverified_words_count: number
  words_total_count: number
}
