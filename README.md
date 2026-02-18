## ChatGPT Electron App

A lightweight Electron wrapper for ChatGPT, tailored for Intel Macs that can't run the official OpenAI desktop app.

### Features
- Minimal ChatGPT client for Intel Macs not supported by the official app
- Native in-app context menu (copy/paste, link copy, open link in browser)
- Intel Mac rendering workaround to reduce Chromium shadow/compositing artifacts

### Limitations
- Requires an OpenAI account (Google login may open in a system browser)
- Basic wrapper, not a full-featured client
- Most links open in-app by default (you can right-click a link and choose **Open Link in Browser**)

### Known Issues
- Unsigned builds may require a Gatekeeper bypass on first launch

### Quick Install (Recommended)

**Simply download the latest release:**
1. Go to the [Releases page](https://github.com/nininunz/gpt-electron/releases)
2. **Download** the `ChatGPT.dmg` file from the assets
3. **Open** the downloaded DMG file
4. **Drag** ChatGPT.app to your Applications folder
5. **Launch** from Applications or Spotlight search

> **Security Note**: On first launch, you may need to right-click the app and select "Open" to bypass Gatekeeper restrictions. You might also need to open **System Settings** > **Privacy & Security** and click **Open Anyway** if prompted.

### Building from Source (Optional)

If you prefer to build the app yourself:

#### Prerequisites
- [Node.js](https://nodejs.org/) (v22.12 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

#### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/nininunz/gpt-electron.git
   cd gpt-electron
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally (optional):**
   ```bash
   npm start
   ```

4. **Build the app (.app bundle):**
   ```bash
   npm run build
   ```
   The app bundle will be in `dist/ChatGPT-darwin-x64/ChatGPT.app`.

5. **(Optional) Build a DMG installer:**
   ```bash
   npm run build:mac
   ```
   The DMG file will be created at `dist/ChatGPT.dmg`.

6. **Install manually:**
   ```bash
   mv dist/ChatGPT-darwin-x64/ChatGPT.app /Applications
   ```

### Project Structure
- `main.js` — Main process script for Electron
- `package.json` — Project metadata and scripts
- `icon.icns` — App icon (macOS)
- `scripts/create-dmg.sh` — DMG packaging helper script
