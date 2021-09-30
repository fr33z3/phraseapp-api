import {addTagsToKeyCollection, createKey, deleteKey, deleteKeyCollection, excludeLocaleOnKeyCollection, getKey, includeLocaleOnKeyCollection, listKeys, removeTagsFromKeyCollection, searchKeys, updateKey} from 'api/keys'

describe('Key api', () => {
  const projectId = '77617b5199af590fde8642fb4178eaa1'

  describe('listKeys', () => {
    it('returns all keys for a project', async () => {
      const result = await listKeys(projectId)
      expect(result).toMatchSnapshot()
    })
  })

  describe('getKey', () => {
    it('returns all keys for a project', async () => {
      const result = await getKey(projectId, 'cd0764df095295dccf8e5a0ab7c32e17')
      expect(result).toMatchSnapshot()
    })
  })

  describe('createKey', () => {
    it('creates key and return key data', async () => {
      const result = await createKey(projectId, {
        name: 'test.key',
      })
      expect(result).toMatchSnapshot()
    })
  })

  describe('updateKey', () => {
    it('updates key and return key data', async () => {
      const result = await updateKey(projectId, 'fa22d14822b4f6bc2660d110729194bf', {
        name: 'test.key-changed-name',
      })
      expect(result).toMatchSnapshot()
    })
  })

  describe('deleteKey', () => {
    it('deletes key', async () => {
      const result = await deleteKey(projectId, 'fa22d14822b4f6bc2660d110729194bf')
      expect(result).toBeTruthy()
    })
  })

  describe('searchKeys', () => {
    it('searches keys by given query criteria', async () => {
      const result = await searchKeys(projectId, {q: 'general.*'})
      expect(result).toMatchSnapshot()
    })
  })

  describe('addTagsToKeyCollection', () => {
    it('adds tags to a collection of keys and return number of affected keys', async () => {
      const result = await addTagsToKeyCollection(projectId, {q: 'general.*', tags: ['tag1', 'tag2']})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "records_affected": 6,
        }
      `)
    })
  })

  describe('removeTagsFromKeyCollection', () => {
    it('removes tags from a collection of keys and return number of affected keys', async () => {
      const result = await removeTagsFromKeyCollection(projectId, {q: 'general.*', tags: ['tag1']})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "records_affected": 6,
        }
      `)
    })
  })

  describe('includeLocaleOnKeyCollection', () => {
    it('includes locale on keys', async () => {
      const result = await includeLocaleOnKeyCollection(projectId, {q: 'general.*', target_locale_id: '0cd76a74f8850878c9e1ac09fa22925e'})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "records_affected": 6,
        }
      `)
    })
  })

  describe('excludeLocaleOnKeyCollection', () => {
    it('excludes locale on keys', async () => {
      const result = await excludeLocaleOnKeyCollection(projectId, {q: 'general.*', target_locale_id: '0cd76a74f8850878c9e1ac09fa22925e'})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "records_affected": 6,
        }
      `)
    })
  })

  describe('deleteKeyCollection', () => {
    it('deletes key collection', async () => {
      const result = await deleteKeyCollection(projectId, {q: 'test.*'})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "records_affected": 21,
        }
      `)
    })
  })
})
