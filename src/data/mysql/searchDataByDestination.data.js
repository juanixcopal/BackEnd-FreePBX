import querys from './querys.js'

export default function searchDataByDestination({ makeDbConnection }) {
  async function getByDestination(params) {
    try {
      const db = await makeDbConnection(querys.getDataByDestination, params || '')
      return db
    } catch (e) {
      console.log(e)
      throw { status: 500, message: 'Error al cargar los datos' }
    }
  }

  return Object.freeze({
    getByDestination
  })
}
