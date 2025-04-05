function startGame(level) {
  if (level === "apprentice") {
    window.location.href = "game.html?level=apprentice";
  } else if (level === "veteran") {
    window.location.href = "game.html?level=veteran";
  }
}

