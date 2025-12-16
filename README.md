# LaTeX Project

## Compilation

To compile the LaTeX document, use one of the following methods:

### Using pdflatex
```bash
pdflatex main.tex
pdflatex main.tex  # Run twice for table of contents
```

### Using latexmk (recommended)
```bash
latexmk -pdf main.tex
```

### Using LaTeX Workshop extension in VS Code
- Install the "LaTeX Workshop" extension
- Open `main.tex` and save it
- The extension will automatically compile the document

## Project Structure

- `main.tex` - Main LaTeX document
- `Images/` - Directory for images and figures
- `.gitignore` - Git ignore file for LaTeX auxiliary files

## Requirements

You need a LaTeX distribution installed:
- **Linux**: TeX Live (`sudo apt install texlive-full`)
- **macOS**: MacTeX
- **Windows**: MiKTeX or TeX Live
