import {Account} from './account'
import {Space} from './space'
import {Format} from './format'

export type Project = {
  id: string
  name: string
  slug: string
  main_format: Format
  project_image_url: string
  account: Account
  space: Space
  created_at: Date
  updated_at: Date
  shares_translation_memory: boolean
}
