import {Account} from './account'
import {Space} from './space'
import {Format} from './format'
import {Maybe} from './common'

export type Project = {
  id: string
  name: string
  slug: string
  main_format: Maybe<Format>
  project_image_url: Maybe<string>
  account: Account
  space: Maybe<Space>
  created_at: Date
  updated_at: Date
  shares_translation_memory: boolean
}

export type ProjectParams = {
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
