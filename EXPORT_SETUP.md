# Export Feature Setup

The roadmap export feature requires two additional packages:

## Installation

Run this command in the `frontend` directory:

```bash
npm install html2canvas jspdf
```

## Features

### 📸 PNG Export
- Captures the entire roadmap as a high-quality PNG image (2x scale)
- Background color: Dark slate (#0f172a)
- File naming: Uses the roadmap title

### 📄 PDF Export
- Converts the roadmap to a PDF document
- Auto-detects orientation (portrait/landscape) based on dimensions
- A4 format with proper scaling
- File naming: Uses the roadmap title

## Usage

1. Generate a roadmap
2. Look for the "Export" section in the right sidebar (below zoom controls)
3. Click the 🟢 green button for PNG export
4. Click the 🔴 red button for PDF export

## Technical Details

- **html2canvas**: Captures the SVG visualization as a canvas
- **jsPDF**: Converts canvas to PDF format
- UI controls are temporarily hidden during capture for clean exports
- High-resolution output with 2x scaling
