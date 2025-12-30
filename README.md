# Kaplan English Course Notes

A comprehensive LaTeX book for learning English, covering grammar, vocabulary, communication skills, and cultural topics. This book is organized into eight main parts, progressing from fundamental communication skills to advanced language patterns.

## 📚 Book Structure

### Part I: Communication Fundamentals
- **Chapter 1**: Non-verbal Communication - Body language, suffixes (-ly, -ed)
- **Chapter 2**: Business English and Adverbs - Professional vocabulary, adverbs of comment

### Part II: Essential Grammar
- **Chapter 3**: Comparatives and Superlatives
- **Chapter 4**: Modal Verbs (Can, Could, May, Might)
- **Chapter 5**: Improvement, Action, and Verb Patterns

### Part III: Professional Communication
- **Chapter 6**: Meeting Language and Professional Communication
- **Chapter 7**: Present Perfect Continuous
- **Chapter 8**: Writing Skills and Common Errors

### Part IV: Past Tenses and Storytelling
- **Chapter 9**: Mishaps and Past Experiences
- **Chapter 10**: Past Habits (Would and Used To)
- **Chapter 11**: Narrative Tenses for Storytelling

### Part V: Culture and Traditions
- **Chapter 12**: Cultural Traditions and Festivals

### Part VI: Advanced Verbal Patterns
- **Chapter 13**: Verb Patterns - Gerunds and Infinitives
- **Chapter 14**: Advanced Verb Patterns

### Part VII: Future Tenses
- **Chapter 15**: Future Tenses (Will, Going To, Present Continuous)

### Part VIII: Integrated Topics
- **Chapter 16**: Technology and Communication
- **Chapter 17**: Superstitions, Travel, and Prepositions

### Appendices
- **Vocabulary**: Comprehensive vocabulary reference
- **Verbs**: Irregular verbs and verb tables
- **References**: Additional resources

## 🛠️ Compilation

### Prerequisites

You need a LaTeX distribution installed on your system:

- **Linux**: TeX Live
  ```bash
  sudo apt install texlive-full
  ```
- **macOS**: [MacTeX](https://www.tug.org/mactex/)
- **Windows**: [MiKTeX](https://miktex.org/) or [TeX Live](https://www.tug.org/texlive/)

### Compilation Methods

#### Method 1: Using latexmk (Recommended)
```bash
cd /path/to/kaplan
latexmk -pdf main.tex
```

This will automatically run LaTeX the necessary number of times and generate `main.pdf`.

#### Method 2: Using pdflatex
```bash
cd /path/to/kaplan
pdflatex main.tex
pdflatex main.tex  # Run twice for table of contents and references
```

#### Method 3: Using LaTeX Workshop in VS Code
1. Install the **LaTeX Workshop** extension in VS Code
2. Open `main.tex`
3. Save the file or use **Ctrl+Alt+B** (Cmd+Option+B on macOS) to build
4. The extension will automatically compile and show the PDF

### Cleaning Auxiliary Files
```bash
# Using latexmk
latexmk -c

# Or manually
rm -f *.aux *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk
rm -f Chapters/*.aux
```

## 📁 Project Structure

```
kaplan/
├── main.tex              # Main document file
├── macros.tex            # Custom commands and environments
├── README.md             # This file
├── Chapters/             # Individual chapter files
│   ├── chapter01.tex
│   ├── chapter02.tex
│   └── ...
└── Images/               # Figures and images
```

## 🎨 Custom Environments

The book uses custom colored boxes for different content types:

- **vocabbox**: Vocabulary focus sections (blue)
- **grammarbox**: Grammar explanations (orange)
- **examplebox**: Example sentences and usage (green)
- **readingbox**: Dialogues and reading contexts (black)

## ✍️ Writing Conventions

- Each chapter follows a consistent structure:
  1. Lesson Objectives
  2. Reading Context (dialogue or passage)
  3. Key Concepts / Vocabulary
  4. Grammar Focus
  5. Practice Exercises
  6. Key Takeaways

- Translations are marked with `\trans{Spanish translation}`
- Key terms are highlighted with `\keyterm{term}`

## 🚀 Contributing

To add or modify content:

1. Create or edit chapter files in the `Chapters/` directory
2. Follow the existing structure and formatting
3. Use the custom environments defined in `macros.tex`
4. Compile the document to check for errors
5. Keep vocabulary and grammar explanations clear and concise

## 📝 Notes

- The document is set to 12pt font on A4 paper
- All chapters use consistent formatting for easy learning
- The book includes a table of contents, list of figures, and list of tables
- Hyperlinks are enabled for easy navigation in the PDF

## 📖 License

This is a personal learning resource. All content is for educational purposes.

---

**Author**: Benjamin Figueroa  
**Course**: Kaplan English Language and Business Communication  
**Last Updated**: 2025
