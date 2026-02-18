Neon 404 Page

Files:

- 404.html — the page
- styles.css — neon styles and layout
- script.js — canvas particle system + interactivity

How to try locally:

1. Open `404.html` in your browser (double-click or `File → Open`).
2. For live testing, run a simple static server in the folder, e.g. with Python:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000/404.html

Customize:

- Edit colors in `styles.css` under `:root`.
- Tweak particle counts in `script.js` (spawn counts and limits).

Accessibility:

- Buttons are keyboard-focusable; press `H` to go home.

Want more features? I can add SVG neon shapes, SSAO glow, or export as a React component.
