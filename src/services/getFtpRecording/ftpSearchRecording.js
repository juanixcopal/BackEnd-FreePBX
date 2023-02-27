import Client from 'ftp'
import fs from 'fs'

function listFtpDirectory(config) {
  return new Promise((resolve, reject) => {
    var c = new Client()

    c.on('ready', function () {
      c.list('../../var/spool/asterisk/monitor/2023/02/23', function (err, list) {
        if (err) throw err
        else {
          console.log('Grabaciones', list)
          resolve(list)
          c.end()
        }
      })

      // c.get('../../var/spool/asterisk/monitor/2023/02/23/internal-1000-1001-20230223-210819-1677186499.2.wav', function (err, stream) {
      //   if (err) throw err
      //   stream.once('close', function () {
      //     c.end()
      //   })
      //   stream.pipe(fs.createWriteStream('Grabacion1.wav'))
      // })
    })
    c.connect(config)
  })
}

export default function makeFtpSearchRecording({ configFtp }) {
  return async function searchRecording() {
    try {
      const list = await listFtpDirectory(configFtp.config)
      // aquí puedes hacer lo que necesites con la lista de archivos
      return list
    } catch (error) {
      console.log('Error', error)
    }
  }
}
