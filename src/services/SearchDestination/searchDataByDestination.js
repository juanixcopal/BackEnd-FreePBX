export default ({ searchDataByDestination }) => {
  return async ({ request }) => {
    const { dst } = request.query
    const params = [dst]

    console.log('PARAMS', params)

    try {
      const result = await searchDataByDestination.getByDestination(params)

      return result
    } catch (e) {
      console.log('Error Service', e)
      return null
    }
  }
}
