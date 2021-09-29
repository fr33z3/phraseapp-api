import settings from './settings.json'
import {configure} from 'client'

configure({
  accessToken: settings.accessToken,
  userAgent: 'TestClient',
})
