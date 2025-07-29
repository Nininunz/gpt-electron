## ChatGPT Electron App

A lightweight Electron wrapper for ChatGPT, tailored for Intel Macs that can’t run the official OpenAI desktop app.

### Features
- Minimal ChatGPT client for Intel Macs not supported by the official app

### Limitations
- Requires an OpenAI account (Google login may open in a system browser)
- Basic wrapper, not a full-featured client

### Known Issues
- None yet

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nininunz/gpt-electron.git
   cd gpt-electron
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Build the app:**
   ```bash
   npm run build
   ```
4. **Move to /Applications:**
   ```bash
   mv ChatGPT-darwin-x64/ChatGPT.app /Applications
   ```

### Project Structure
- `main.js` — Main process script for Electron
- `package.json` — Project metadata and scripts
- `icon.icns` — App icon (macOS)