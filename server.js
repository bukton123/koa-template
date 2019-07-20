const koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const helmet = require('koa-helmet')
const config = require('config')

const { applyApiMiddleware } = require('./api')

const server = new koa()
const SERVER = config.get('SERVER')

// server usage libs
server.use(helmet())
server.use(cors())
server.use(koaBody())

// apply middleware
applyApiMiddleware(server)

server.listen(SERVER.PORT, SERVER.LISTEN, () => {
  console.log(`🚀 Server listening on port ${SERVER.PORT}!`)
})
