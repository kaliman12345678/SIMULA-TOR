const { app, BrowserWindow, Menu } = require('electron');

function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1280, height: 720, backgroundColor: '#000', title: 'Simula-tor',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, autoplayPolicy: 'no-user-gesture-required' }
  });
  w.loadFile('index.html');
  w.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') { w.setFullScreen(!w.isFullScreen()); e.preventDefault(); }
  });
}

app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
