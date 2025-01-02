# Chrome Tab Leads Grabber

A Chrome extension that helps you save and manage URLs (leads) directly from your browser tabs or manual input.

## Features

- Save current tab URL with one click
- Manually input and save URLs
- View all saved leads in a clean list format
- Open saved URLs in new tabs
- Delete all saved leads with a double-click
- Persistent storage using Chrome's localStorage

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Project Structure

- `index.html` - Main popup interface
- `index.js` - Core functionality and event handlers
- `index.css` - Styling for the popup
- `manifest.json` - Chrome extension configuration
- `vite.config.js` - Vite build configuration

## Development

To start development:

```bash
npm install
npm run dev

```

To build the extension:

```bash
npm run build
```

## Usage

- Click the extension icon in Chrome to open the popup
- To save the current tab: Click "SAVE TAB"
- To manually save a URL: Enter the URL in the input field and click "SAVE INPUT"
- To delete all saved leads: Double-click "DELETE ALL"
- Click any saved URL to open it in a new tab

## Technical Details

The extension uses:

- Chrome Extensions Manifest V3
- Chrome Tabs API for accessing current tab information
- localStorage for persistent data storage
- Vite for building and development

## Permissions

The extension requires the following permissions:

- `tabs`: To access current tab information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

# chrome-extension-linkarchive
