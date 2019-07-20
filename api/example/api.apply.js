const Router = require('koa-router')

module.exports = () => {
  const router = new Router({
    prefix: '/example',
  })

  router.get('/', async ctx => {
    ctx.body = { test: 'example' }
  })

  return router
}
