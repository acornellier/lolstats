import { LolApi } from 'twisted'

export let lolApi: LolApi

if (process.env.NODE_ENV === `production`) {
  lolApi = new LolApi()
} else {
  if (!global.lolApi) {
    global.lolApi = new LolApi()
  }

  lolApi = global.lolApi
}
