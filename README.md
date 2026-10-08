# Modal Box Project

A clean and reusable **Modal Box UI** built with **Object-Oriented JavaScript** and **Tailwind CSS**.

This project was created to practice reusable UI components with JavaScript classes while recreating the interface with Tailwind CSS utilities.

## ✨ Features

- Reusable Modal component using a JavaScript class
- Multiple independent modals
- Open and close interactions
- Smooth scale and opacity transitions
- Modern gradient-based UI
- Responsive layout
- SVG close icon
- Tailwind CSS utility-first styling
- No JavaScript framework required

## 🛠️ Technologies

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS v4**
- **Git & GitHub**

## 🧠 JavaScript Concept

The modal system is built with a reusable `Modal` class:

```js
class Modal {
  constructor(openButton, closeButton, modalBox) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalBox = document.querySelector(modalBox);

    this.openButton.addEventListener("click", () => this.open());
    this.closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this.modalBox.classList.add("open-modal");
  }

  close() {
    this.modalBox.classList.remove("open-modal");
  }
}

const modalOne = new Modal(".modal-one-open", ".close-btn", ".modal");
const modalTwo = new Modal(".modal-two-open", ".close-btn-two", ".modal-two");
```

The same class can control multiple modal instances without duplicating the main logic.

## 🎨 Tailwind CSS

The project uses Tailwind CSS for:

- Flexbox and positioning
- Spacing and sizing
- Typography
- Gradients
- Shadows
- Border radius
- Hover states
- Transforms and transitions
- Opacity and pointer events
- Custom arbitrary values when needed

## 📁 Project Structure

```text
modal-box/
├── index.html
├── main.js
├── input.css
├── output.css
├── style.css
├── close-icon-white.svg
├── package.json
├── package-lock.json
└── .gitignore
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/tahanemati89/modal-box.git
```

Enter the project directory:

```bash
cd modal-box
```

Install dependencies:

```bash
npm install
```

Run Tailwind in watch mode:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

Then open `index.html` with a local development server such as **VS Code Live Server**.

## 📌 Purpose

This project is part of my frontend learning journey and was built to strengthen practical skills in:

- Object-Oriented Programming with JavaScript
- DOM manipulation
- Event handling
- Reusable components
- Tailwind CSS
- Git and GitHub workflow
- Building projects without blindly copying code

## 👨‍💻 Author

**Taha Hemati**

Frontend development learner focused on learning by building real projects.

---

⭐ Thanks for checking out the project!
