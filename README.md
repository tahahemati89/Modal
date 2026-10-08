# ✦ Modal Box — A Small UI With Real Interaction

> A focused vanilla JavaScript + Tailwind CSS project built to practice **DOM manipulation, event handling, UI state, and smooth modal animations**.

![Project Preview](./preview.png)

---

## 🎯 Why this project?

This project is intentionally small, but the goal was bigger than simply making a modal appear.

I built the interface to practice how a real UI behaves when its state changes:

```text
Closed
  ↓
Click "Open Modal Box"
  ↓
Overlay appears
  ↓
Modal scales into view
  ↓
Click "×"
  ↓
Modal closes
```

The project also gave me a chance to debug a real interaction bug instead of only following the happy path.

---

## 🧠 What I practiced

| Area | Practice |
|---|---|
| JavaScript | DOM selection and event listeners |
| UI state | Adding/removing classes to control visibility |
| Tailwind CSS | Utility classes and custom gradient values |
| Animation | `opacity`, `scale`, `transition`, and `duration` |
| Interaction | Open/close modal behavior |
| Debugging | Finding an event-blocking overlay issue |

---

## 🐛 The bug that made this project interesting

One of the more useful parts of the project was debugging an interaction problem.

When the modal was open, the full-screen overlay was still receiving pointer interactions. The visible modal box was not the element blocking the button underneath it — the **overlay itself** was.

The fix was to apply:

```css
pointer-events: none;
```

to the overlay in its inactive state.

That small bug turned into a good reminder:

> **When an element is blocking an interaction, debug the actual layer receiving the pointer — not just the element you can see.**

---

## ✨ UI details

- Dark blue/purple gradient background
- Glass-style main card
- Semi-transparent modal backdrop
- Centered modal layout
- Smooth scale-in animation
- Minimal close button
- Responsive utility-based styling

---

## 🧩 Project structure

```text
Modal-Box/
│
├── index.html
├── src/
│   ├── input.css
│   └── main.js
│
├── dist/
│   └── output.css
│
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Run locally

Install dependencies:

```bash
npm install
```

Start Tailwind in watch mode:

```bash
npm run dev
```

Then open `index.html` with a local development server such as **Live Server**.

---

## 🛠 Built with

**HTML5** · **Tailwind CSS** · **Vanilla JavaScript**

No frameworks. No component libraries. Just the DOM, CSS utilities, and JavaScript controlling the interaction.

---

## 📌 Project status

**Completed ✅**

This is one of my course projects, rebuilt with Tailwind CSS as part of my frontend practice journey.

---

## 👤 Author

Built by **Taha Hemmati** as part of my ongoing frontend development practice.

> Small project. Real debugging. One more step forward.
