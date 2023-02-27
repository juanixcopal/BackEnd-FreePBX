import { searchDataByDestination } from '../../data/index.js'
import makeSearchDataByDestination from './searchDataByDestination.js'
// import { configFtp } from '../configFtp/configFtp.js'
// import makeFtpSearchRecording from '../getFtpRecording/ftpSearchRecording.js'

import { configFtp } from '../configFtp/configFtp.js'
import makeFtpSearchRecording from '../getFtpRecording/ftpSearchRecording.js'

const dataByDestination = makeSearchDataByDestination({ searchDataByDestination })

const playRecordingFtp = makeFtpSearchRecording({ configFtp })

const searchRecordingService = {
  'search-data-by-destination': dataByDestination,
  'play-recording': playRecordingFtp
}

export default searchRecordingService
