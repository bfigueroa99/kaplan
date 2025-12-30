# Kaplan English Course Notes

A comprehensive LaTeX book for learning English, covering grammar, vocabulary, communication skills, and cultural topics. This book is organized into ten pedagogically-structured parts with 26 chapters, progressing from basic grammar foundations to advanced language patterns and integrated topics.

## 📚 Book Structure

### Part I: Foundation - Basic Tenses and Grammar
- **Chapter 1**: Present Simple and Present Continuous - Foundation tenses, stative verbs, time expressions
- **Chapter 2**: Past Simple Basics - Regular/irregular verbs, -ed pronunciation, questions and negatives
- **Chapter 3**: Articles and Grammar Essentials - a/an/the usage, countable/uncountable nouns, word order

### Part II: Communication Fundamentals
- **Chapter 4**: Non-verbal Communication - Body language, suffixes (-ly, -ed)
- **Chapter 5**: Business English and Adverbs - Professional vocabulary, adverbs of comment

### Part III: Essential Grammar
- **Chapter 6**: Comparatives and Superlatives - Comparative/superlative forms, (not) as...as, intensifiers
- **Chapter 7**: Modal Verbs - Can, Could, May, Might, Must, Should for ability, permission, obligation
- **Chapter 8**: Question Formation - Yes/no questions, WH-questions, subject vs object questions, question tags
- **Chapter 9**: Prepositions of Place and Time - IN/AT/ON rules, transportation prepositions

### Part IV: Future Tenses
- **Chapter 10**: Future Tenses - Will, Going To, Present Continuous for future, predictions vs plans

### Part V: Professional Communication
- **Chapter 11**: Meeting Language and Professional Communication - Meeting phrases, presentations, discussions
- **Chapter 12**: Improvement, Action, and Verb Patterns - Professional vocabulary, verb + preposition patterns

### Part VI: Perfect Tenses
- **Chapter 13**: Present Perfect Simple - Formation, uses, vs Past Simple, for/since, ever/never/just/already/yet
- **Chapter 14**: Present Perfect Continuous - Duration emphasis, continuous aspect, time expressions

### Part VII: Past Tenses and Storytelling
- **Chapter 15**: Mishaps and Past Experiences - Describing accidents, problems, Past Simple in context
- **Chapter 16**: Past Habits - Would and Used To for past routines and repeated actions
- **Chapter 17**: Narrative Tenses for Storytelling - Past Simple, Past Continuous, Past Perfect sequencing

### Part VIII: Advanced Grammar
- **Chapter 18**: The Passive Voice - Formation in all tenses, when to use passive, by+agent, formal contexts
- **Chapter 19**: Conditionals - Zero, 1st, 2nd, 3rd conditionals, mixed conditionals, unless/as long as
- **Chapter 20**: Reported Speech - Statement/question/command reporting, tense backshift, say vs tell

### Part IX: Advanced Verbal Patterns
- **Chapter 21**: Verb Patterns - Gerunds and Infinitives - Verb + -ing, verb + to infinitive, changes in meaning
- **Chapter 22**: Advanced Verb Patterns - Complex patterns, causative verbs, perception verbs

### Part X: Integrated Topics
- **Chapter 23**: Cultural Traditions and Festivals - Cultural vocabulary, celebration descriptions
- **Chapter 24**: Technology and Communication - Technology vocabulary, digital communication
- **Chapter 25**: Travel, Superstitions, and Expressions - Travel phrases, beliefs, cultural expressions
- **Chapter 26**: Writing Skills and Common Errors - Writing techniques, error correction, style improvement

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
