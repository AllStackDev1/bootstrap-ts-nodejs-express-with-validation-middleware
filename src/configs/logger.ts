/**
 * @author Chinedu Ekene Okpala <allstackdev@gmail.com>
 * @summary Application Logger
 * @name AppLogger
 */
const AppLogger = (): Record<string, unknown> => {
  const NODE_ENV = process.env.NODE_ENV
  const PORT = process.env.PORT || 9000
  return { NODE_ENV, PORT }
}

export default AppLogger
