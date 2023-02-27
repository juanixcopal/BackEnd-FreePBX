import express from 'express'
import config from '../config/env.js'
import router from '../routes/index.routes.js'

process.setMaxListeners(50)

let _express = null

const { SERVER_PORT, SERVER_HOST } = config

const start = () => {
  _express = express().use(router({ config }))

  return new Promise(resolve => {
    _express.listen(SERVER_PORT, SERVER_HOST, console.log('SERVER RUNNING ON PORT: ', SERVER_PORT), console.log('SERVER RUNNING ON HOST', SERVER_HOST))

    resolve()
  })
}

start().catch(console.log)
