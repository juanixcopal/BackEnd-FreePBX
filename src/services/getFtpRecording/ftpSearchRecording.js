import Client from 'ftp'

function listFtpDirectory(config) {
  return new Promise((resolve, reject) => {
    var c = new Client()

    c.on('ready', function () {
      c.list('../../var/spool/asterisk/monitor/2023/02/23/internal-1001-1000-20230223-211217-1677186737.4.wav', function (err, list) {
        if (err) throw err
        else {
          console.log('Grabaciones', list)
          c.end()
          resolve(list)
        }
      })
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
      console.log('Eror', error)
    }
  }
}
