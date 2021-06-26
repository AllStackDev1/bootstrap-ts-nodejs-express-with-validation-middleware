import * as Debug from 'debug'
import * as log4js from 'log4js'

/**
 * @summary This is the configuration file for the applicaiton logger
 * it logs messages to the console and error to a file in the logs folder
 * @name AppLogger
 * @author Chinedu Ekene Okpala <allstackdev@gmail.com>
 */

const AppLogger = (): { getLogger: log4js.Logger; debug: Debug.Debugger } => {
  // application debugger
  const debug = Debug('app')

  // configure logger for the application
  log4js.configure({
    appenders: {
      all: {
        type: 'file',
        filename: './logs/app_api.log',
        maxLogSize: 10485760,
        backups: 3,
        compress: true
      },
      emergencies: {
        type: 'file',
        filename: './logs/app_api_errors.log',
        maxLogSize: 10485760,
        backups: 3,
        compress: true
      },
      errors: {
        type: 'logLevelFilter',
        appender: 'emergencies',
        level: 'error'
      }
    },
    categories: {
      default: { appenders: ['errors', 'all'], level: 'debug' }
    }
  })

  return { getLogger: log4js.getLogger(), debug }
}

export default AppLogger()
