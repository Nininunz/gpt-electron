const { app, BrowserWindow, Menu, shell, clipboard } = require('electron');

// Older Intel macOS GPUs can show Chromium compositing artifacts.
if (process.platform === 'darwin' && process.arch === 'x64') {
  app.disableHardwareAcceleration();
  app.commandLine.appendSwitch('disable-gpu-compositing');
}

function createContextMenu(win, params) {
  const template = [];

  if (params.isEditable) {
    template.push(
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteAndMatchStyle' },
      { role: 'selectAll' }
    );
  } else {
    const hasSelection = Boolean(params.selectionText && params.selectionText.trim());

    if (hasSelection) {
      template.push({ role: 'copy' });
    }

    if (params.linkURL) {
      if (template.length > 0) {
        template.push({ type: 'separator' });
      }
      template.push(
        {
          label: 'Open Link in Browser',
          click: () => {
            shell.openExternal(params.linkURL);
          }
        },
        {
          label: 'Copy Link',
          click: () => {
            clipboard.writeText(params.linkURL);
          }
        }
      );
    }
  }

  if (template.length === 0) {
    return null;
  }

  return Menu.buildFromTemplate(template);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "ChatGPT",
    titleBarStyle: "default",  // ✅ Native macOS title bar
    trafficLightPosition: { x: 12, y: 12 },
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL("https://chatgpt.com/");
  win.webContents.on('context-menu', (_event, params) => {
    const menu = createContextMenu(win, params);
    if (menu) {
      menu.popup({ window: win });
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
