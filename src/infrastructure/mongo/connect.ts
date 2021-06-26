/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mongoose from 'mongoose'
import * as log4js from 'log4js'

import { AppContants, logger } from 'configs'

const dbConfig = (
  cb: (mongoose: mongoose.Mongoose) => void
): mongoose.Connection => {
  const env = AppContants()

  mongoose.connect(
    env.dbUrl + '/' + env.dbName + '?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  const db = mongoose.connection
  mongoose.set('useCreateIndex', true)
  mongoose.set('useFindAndModify', false)

  // Database connection events
  db.on('connected', () => {
    logger.debug('Mongoose connected')
  })

  db.on('error', err => {
    logger.debug(`Database connection error: ${err}`)
    log4js.shutdown()
    process.exit(1)
  })

  db.on('disconnected', err => {
    logger.debug(`Database disconnection error: ${err}`)
    log4js.shutdown()
    process.exit(1)
  })

  // Execute cb method if database connection is opened
  db.on('open', () => cb(mongoose))

  return db
}

export default dbConfig
