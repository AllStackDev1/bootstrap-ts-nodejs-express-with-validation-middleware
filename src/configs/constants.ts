import IConstants from './interfaces/constants.interface'

/**
 * @author Chinedu Ekene Okpala <allstackdev@gmail.com>
 * @summary Application Contants Variables Declearation
 * @name AppContants
 */
const AppContants = (): IConstants => {
  const NODE_ENV: string = process.env.NODE_ENV || 'DEV'

  return {
    enivorment: NODE_ENV,
    port: Number(process.env.PORT) || 9000,
    dbUrl: String(process.env[`${NODE_ENV}_DATA_BASE_URL`]),
    dbName: String(process.env[`${NODE_ENV}_DATA_BASE_NAME`])
  }
}

export default AppContants
