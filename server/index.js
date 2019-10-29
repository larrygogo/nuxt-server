import Koa from 'koa'
import * as R from 'ramda'
import {resolve} from 'path'
import {Nuxt, Builder} from 'nuxt'
import config from '../nuxt.config'

// import loadDir from './utils/load_dir'

const r = path => resolve(__dirname, path)

const app = new Koa()
const nuxt = new Nuxt(config)
const middleware = ['ExceptionHandler', 'Router']

function useMiddleware(app) {
    return R.map(R.compose(
        R.map(i => i(app)), require, i => `${r('./middleware')}/${i}`
    ))
}
async function start() {
    useMiddleware(app)(middleware)
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }
    const { host, port } = nuxt.options.server
    app.use(ctx => {
        ctx.status = 200
        ctx.respond = false  // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx    // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        // ctx.req.session = ctx.session
        nuxt.render(ctx.req, ctx.res)
    })

    app.listen(port, host)
    console.log(`Server listening on http://${host}:${port}`)    
}

start()





