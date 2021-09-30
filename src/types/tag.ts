export type Tag = {
  name: string
  keys_count: number
  created_at: string
  updated_at: string
}

export type TagLocale = {
  id: string
  name: string
  code: string
}

export type TagStatistics = {
  keys_total_count: number
  translations_completed_count: number
  translations_unverified_count: number
  keys_untranslated_count: number
}

export type TagParams = {
  branch?: string
  name: string
}
