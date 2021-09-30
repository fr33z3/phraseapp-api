import {Maybe} from './common'

type KeyCreator = {
  id: string
  username: string
  name: string
  gravatar_uid: string
}

export type Key = {
  id: string
  name: string
  name_hash: string
  description: Maybe<string>
  plural: boolean
  tags: string[]
  data_type: string
  name_plural: Maybe<string>
  comments_count: number
  max_characters_allowed: number
  screenshot_url: Maybe<string>
  unformatted: boolean
  xml_space_preserve: boolean
  original_file: Maybe<string>
  format_value_type: Maybe<string>
  creator: KeyCreator
  created_at: string
  updated_at: string
}

export type CollectionKey = Pick<Key, 'id' | 'name' | 'description' | 'name_hash' | 'plural' | 'data_type' | 'max_characters_allowed' | 'tags' | 'created_at' | 'updated_at'>

export type KeyParams = {
  branch?: string
  name: string
  description?: string
  plural?: boolean
  name_plural?: boolean
  data_type?: boolean
  tags?: string
  max_characters_allowed?: number
  unformatted?: boolean
  xml_space_preserve?: boolean
  original_file?: string
  localized_format_string?: string
  localized_format_key?: string
}

export type SearchParams = {
  branch?: string
  sort?: 'name' | 'created_at' | 'updated_at'
  order?: 'asc' | 'desc'
  q: string
  locale_id?: string 
}

export type UpdateKeyCollectionTagsParams = {
  branch?: string
  q: string
  locale_id?: string
  tags: string[]
}

export type UpdateKeyCollectionLocaleParams = {
  branch?: string
  q: string
  target_locale_id: string
  tags?: string[]
}

export type DeleteKeyCollectionParams = {
  branch?: string,
  q: string,
  locale_id?: string,
}
