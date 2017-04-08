const { BrowserWindow } = require('electron').remote

export default (url) => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  win.webContents.on('did-finish-load', () => {
    win.show()
    win.focus()
  })

  win.loadURL(url)
}
