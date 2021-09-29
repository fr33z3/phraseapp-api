import nock from 'nock'
import path from 'path'

function getFixtureFileName(state: jest.MatcherState) {
  return `${state.currentTestName}`.replace(/ /g, '_') + '.json'
}

function getFixtureFolder(state: jest.MatcherState) {
  const testFolder = path.dirname(state.testPath)
  return path.join(testFolder, 'fixtures')
}

let nockDone: () => void

beforeEach(async () => {
  const state = expect.getState()
  nock.back.setMode('record')
  nock.back.fixtures = getFixtureFolder(state)
  const back = await nock.back(getFixtureFileName(state), {})
  nockDone = back.nockDone
})

afterEach(async () => {
  nockDone()
  nock.restore()
  // nockDone()
  // nock.cleanAll()
  // nock.back.setMode('wild')
})
