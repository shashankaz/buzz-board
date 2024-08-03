# Buzz Board Chrome Extension

## Overview
Buzz Board is a Chrome extension built using React that provides a digital notice board with various widgets to enhance productivity and provide useful information. The extension includes features such as a Google Slide integration, Pomodoro Timer, most visited sites, announcements, and more.

## Features
- **Side Pane:** Displays the current date and time, most visited sites, and announcements.
- **Widgets:**
  - Google Slide
  - Pomodoro Timer
  - Google Spreadsheet
  - Google Form
  - Music
  - Polls
  - Issue Tracker
  - DGC (Daily Goal Check)
  - Opportunity Board
  - ChatGPT
- **Settings:** Manage widget visibility and update Spotify playlist URL.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shashankaz/buzz-board.git
   cd buzz-board
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (top right corner)
   - Click "Load unpacked" and select the `build` folder in your project directory
