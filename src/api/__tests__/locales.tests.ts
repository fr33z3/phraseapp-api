import {createLocale, deleteLocale, getLocale, listAccountLocales, listLocales, updateLocale} from 'api/locales'

describe('Locale api', () => {
  describe('listAccountLocales', () => {
    it('returns all locales for a specified account', async () => {
      const result = await listAccountLocales('f996970154bcece65693ea658c160f0f')
      expect(result).toMatchSnapshot()
    })
  })

  describe('listLocales',() => {
    it('returns locales list', async () => {
      const result = await listLocales('77617b5199af590fde8642fb4178eaa1')
      expect(result).toMatchSnapshot()
    })
  })

  describe('createLocale', () => {
    it('creates new locale and returns locale data', async () => {
      const result = await createLocale('77617b5199af590fde8642fb4178eaa1', {name: 'Russian', code: 'ru'})
      expect(result).toMatchSnapshot()
    })
  })

  describe('updateLocale', () => {
    it('updates locale and returns locale data', async () => {
      const result = await updateLocale('77617b5199af590fde8642fb4178eaa1', '38dbf68906d0e5ab468eaef7d6d1a8ae', {name: 'RussianLanguage'})
      expect(result).toMatchSnapshot()
    })
  })

  describe('getLocale', () => {
    it('returns single locale data', async () => {
      const result = await getLocale('77617b5199af590fde8642fb4178eaa1', '0cd76a74f8850878c9e1ac09fa22925e')
      expect(result).toMatchSnapshot()
    })
  })

  describe('deleteLocale', () => {
    it('deletes locale', async () => {
      const result = await deleteLocale('77617b5199af590fde8642fb4178eaa1', '38dbf68906d0e5ab468eaef7d6d1a8ae')
      expect(result).toBeTruthy()
    })
  })
})
