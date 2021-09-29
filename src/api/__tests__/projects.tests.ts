import {createProject, deleteProject, getProject, listProjects, updateProject} from 'api/projects'

describe('Project api', () => {
  describe('listProjects', () => {
    it('responds with projects collection', async () => {
      const result = await listProjects()
      expect(result).toMatchInlineSnapshot(`
        Array [
          Object {
            "account": Object {
              "company": null,
              "company_logo_url": null,
              "created_at": "2021-09-27T15:28:39Z",
              "id": "f996970154bcece65693ea658c160f0f",
              "name": "Test Test",
              "slug": "test-test-5aee3f29-b43b-4572-a16b-dea99c1130c7",
              "updated_at": "2021-09-27T15:28:45Z",
            },
            "created_at": "2021-09-27T15:28:39Z",
            "id": "77617b5199af590fde8642fb4178eaa1",
            "main_format": null,
            "name": "My Demo Application",
            "project_image_url": null,
            "slug": "my-demo-application",
            "space": null,
            "updated_at": "2021-09-27T15:28:45Z",
          },
        ]
      `)
    })
  })

  describe('getProject', () => {
    it('responds with project data', async () => {
      const result = await getProject('77617b5199af590fde8642fb4178eaa1')
      expect(result).toMatchInlineSnapshot(`
        Object {
          "account": Object {
            "company": null,
            "company_logo_url": null,
            "created_at": "2021-09-27T15:28:39Z",
            "id": "f996970154bcece65693ea658c160f0f",
            "name": "Test Test",
            "slug": "test-test-5aee3f29-b43b-4572-a16b-dea99c1130c7",
            "updated_at": "2021-09-27T15:28:45Z",
          },
          "branch": null,
          "created_at": "2021-09-27T15:28:39Z",
          "id": "77617b5199af590fde8642fb4178eaa1",
          "main_format": null,
          "name": "My Demo Application",
          "project_image_url": null,
          "shares_translation_memory": true,
          "slug": "my-demo-application",
          "space": null,
          "updated_at": "2021-09-27T15:28:45Z",
        }
      `)
    })
  })

  describe('createProject', () => {
    it('creates project and responds with project data', async () => {
      const result = await createProject({name: 'Test Project'})
      expect(result).toMatchInlineSnapshot(`
        Object {
          "account": Object {
            "company": null,
            "company_logo_url": null,
            "created_at": "2021-09-27T15:28:39Z",
            "id": "f996970154bcece65693ea658c160f0f",
            "name": "Test Test",
            "slug": "test-test-5aee3f29-b43b-4572-a16b-dea99c1130c7",
            "updated_at": "2021-09-29T07:21:50Z",
          },
          "branch": null,
          "created_at": "2021-09-29T07:21:50Z",
          "id": "b1d426ad5efe3d924109063fa8724bc4",
          "main_format": null,
          "name": "Test Project",
          "project_image_url": null,
          "shares_translation_memory": true,
          "slug": "test-project",
          "space": null,
          "updated_at": "2021-09-29T07:21:50Z",
        }
      `)
    })
  })

  describe('updateProject', () => {
    it('updates project and responds with updated data', async () => {
      const result = await updateProject('b1d426ad5efe3d924109063fa8724bc4', {name: 'Updated Test Project'})
      expect(result).toMatchInlineSnapshot(`
          Object {
            "account": Object {
              "company": null,
              "company_logo_url": null,
              "created_at": "2021-09-27T15:28:39Z",
              "id": "f996970154bcece65693ea658c160f0f",
              "name": "Test Test",
              "slug": "test-test-5aee3f29-b43b-4572-a16b-dea99c1130c7",
              "updated_at": "2021-09-29T07:29:03Z",
            },
            "branch": null,
            "created_at": "2021-09-29T07:21:50Z",
            "id": "b1d426ad5efe3d924109063fa8724bc4",
            "main_format": null,
            "name": "Updated Test Project",
            "project_image_url": null,
            "shares_translation_memory": true,
            "slug": "test-project",
            "space": null,
            "updated_at": "2021-09-29T07:29:03Z",
          }
      `)
    })
  })

  describe('deleteProject', () => {
    it('deletes project', async () => {
      const result = await deleteProject('b1d426ad5efe3d924109063fa8724bc4')
      expect(result).toBeTruthy()
    })
  })
})
