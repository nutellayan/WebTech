# Spot the Differences Game

A fun and interactive web-based **Spot the Differences** game built with **HTML, CSS, and JavaScript** as part of my Web Technologies coursework. Players compare two images side by side to find visual differences — supported by hints, sound effects, and clean visual feedback.

---

##  Features

- **15 progressively challenging levels** — starting with 5 differences, increasing to 11 in later stages.
- **3 hints per level** — highlights a remaining difference for a few seconds.
- **Sound effects** for correct and incorrect clicks.
- **Toggleable background music** and sound settings, remembered during play.
- **Progress tracking** via a custom top navbar: differences left, hints left, sound/music buttons.
- **Demo walkthrough video** available for first-time users (demo.html).
- **Responsive click detection** — works reliably across screen sizes using coordinate scaling.
- **Minimalist white layout** to keep focus on gameplay.

---

## Technical Overview

- Developed in **IntelliJ IDEA** using:
  - `index.html` – Homepage
  - `game.html` – Game logic and UI
  - `demo.html` – Subtitled video walkthrough
  - Supporting pages: FAQ, Contact
- JavaScript interactivity in `game.js`
- Design and layout in `style.css`
- Assets organized into `images/` and `audio/` folders

---

## Gameplay Notes

- No timer — designed to be stress-free and casual
- No penalty for wrong clicks
- All differences must be found to complete a level
- Simple alerts (e.g. `alert("You found all differences!")`) used for feedback
- A 'Next' button appears to continue to the next level after completion

---

## Demo Video

Check out the demo (in `demo.html`) to get a quick walkthrough of gameplay and UI features.
The demo uses a unique image set not found in the actual game.

---

## License

This project is for educational use only.
© 2025 Joker.co | All rights reserved.

<p align="center">
  <img src="assets/jokerco.gif" alt="Joker.co Logo" width="100"/>
</p>
