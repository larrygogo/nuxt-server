import Route from "../lib/Core"
import {resolve} from 'path'

const r = path => resolve(__dirname, path)

export const Router = async app => {
  const apiPath = r('../controller')
  const router = new Route(app, apiPath)
  router.init()
}