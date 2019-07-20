const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const config = require('config')

const API = config.get('API')
const baseName = path.basename(__filename)

exports.applyApiMiddleware = app => {
  const router = new Router({
    prefix: `/${API.PUBLIC}/${API.VERSION}`,
  })

  // Require all the folders and create a sub-router for each feature api
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('api.apply') !== 0 && file !== baseName)
    .forEach(file => {
      const api = require(path.join(__dirname, file, 'api.apply'))()
      router.use(api.routes())
    })

  app.use(router.routes()).use(router.allowedMethods())
}
