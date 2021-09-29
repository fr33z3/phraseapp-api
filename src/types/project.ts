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
