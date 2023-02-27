import searchDataByDestinationService from '../services/SearchDestination/index.js'

import makeSearDataByDestinationController from './searchDataByDestination.controller.js'

const searchDataByDestinationController = makeSearDataByDestinationController({ searchDataByDestinationService })

export { searchDataByDestinationController }
