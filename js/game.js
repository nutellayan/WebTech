let differencesLeft = 5;
let hintsLeft = 3;
let soundEnabled = true;

// Get references to the sound effects
const correctSound = document.getElementById("correct-sound");
const errorSound = document.getElementById("error-sound");

// Get references to both images
const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");
const nextButton = document.getElementById("next-button"); // Reference to the "Next" button
const soundToggleButton = document.getElementById("sound-toggle"); // Reference to the sound toggle button
const hintsButton = document.getElementById("hints-button"); // Hints button

// Define an array of image sets with their differences
const imageSets = [
  {
    leftImageSrc: "assets/images/set1-left.jpg",
    rightImageSrc: "assets/images/set1-right.jpg",
    correctSpots: [
      { x: 144, y: 99 },
      { x: 120, y: 238 },
      { x: 399, y: 313 },
      { x: 645, y: 303 },
      { x: 684, y: 196 }
    ]
  },
  {
    leftImageSrc: "assets/images/set2-left.jpg",
    rightImageSrc: "assets/images/set2-right.jpg",
    correctSpots: [
      { x: 154, y: 366 },
      { x: 354, y: 247 },
      { x: 411, y: 139 },
      { x: 598, y: 287 },
      { x: 548, y: 399 }
    ]
  },
  {
    leftImageSrc: "assets/images/set3-left.jpg",
    rightImageSrc: "assets/images/set3-right.jpg",
    correctSpots: [
      { x: 147, y: 307 },
      { x: 210, y: 90 },
      { x: 412, y: 413 },
      { x: 550, y: 285 },
      { x: 717, y: 208 }
    ]
  },
  {
    leftImageSrc: "assets/images/set4-left.jpg",
    rightImageSrc: "assets/images/set4-right.jpg",
    correctSpots: [
      { x: 218, y: 322 },
      { x: 136, y: 422 },
      { x: 278, y: 290 },
      { x: 702, y: 385 },
      { x: 654, y: 185 }
    ]
  },
  {
    leftImageSrc: "assets/images/set5-left.jpg",
    rightImageSrc: "assets/images/set5-right.jpg",
    correctSpots: [
      { x: 562, y: 79 },
      { x: 361, y: 435 },
      { x: 83, y: 408 },
      { x: 914, y: 137 },
      { x: 710, y: 263 }
    ]
  },
  {
    leftImageSrc: "assets/images/set6-left.jpg",
    rightImageSrc: "assets/images/set6-right.jpg",
    correctSpots: [
      { x: 46, y: 35 },
      { x: 27, y: 200 },
      { x: 405, y: 207 },
      { x: 306, y: 338 },
      { x: 482, y: 527 },
      { x: 895, y: 256 },
      { x: 687, y: 94 }
    ]
  },
  {
    leftImageSrc: "assets/images/set7-left.jpg",
    rightImageSrc: "assets/images/set7-right.jpg",
    correctSpots: [
      { x: 298, y: 135 },
      { x: 224, y: 335 },
      { x: 421, y: 267 },
      { x: 777, y: 346 },
      { x: 710, y: 353 },
      { x: 691, y: 398 },
      { x: 845, y: 601 }
    ]
  },
  {
    leftImageSrc: "assets/images/set8-left.jpg",
    rightImageSrc: "assets/images/set8-right.jpg",
    correctSpots: [
      { x: 34, y: 97 },
      { x: 76, y: 309 },
      { x: 110, y: 428 },
      { x: 508, y: 348 },
      { x: 753, y: 212 },
      { x: 889, y: 171 },
      { x: 728, y: 505 }
    ]
  },
  {
    leftImageSrc: "assets/images/set9-left.jpg",
    rightImageSrc: "assets/images/set9-right.jpg",
    correctSpots: [
      { x: 24, y: 133 },
      { x: 23, y: 288 },
      { x: 228, y: 405 },
      { x: 410, y: 168 },
      { x: 595, y: 474 },
      { x: 920, y: 182 },
      { x: 906, y: 326 }
    ]
  },
  {
    leftImageSrc: "assets/images/set10-left.jpg",
    rightImageSrc: "assets/images/set10-right.jpg",
    correctSpots: [
      { x: 10, y: 411 },
      { x: 267, y: 76 },
      { x: 415, y: 318 },
      { x: 154, y: 318 },
      { x: 468, y: 467 },
      { x: 824, y: 515 },
      { x: 858, y: 315 }
    ]
  },
  {
    leftImageSrc: "assets/images/set11-left.jpg",
    rightImageSrc: "assets/images/set11-right.jpg",
    correctSpots: [
      { x: 68, y: 56 },
      { x: 314, y: 51 },
      { x: 307, y: 377 },
      { x: 696, y: 124 },
      { x: 509, y: 291 },
      { x: 533, y: 417 },
      { x: 675, y: 440 },
      { x: 693, y: 343 },
      { x: 873, y: 67 }
    ]
  },
  {
    leftImageSrc: "assets/images/set12-left.jpg",
    rightImageSrc: "assets/images/set12-right.jpg",
    correctSpots: [
      { x: 74, y: 36 },
      { x: 165, y: 412 },
      { x: 310, y: 208 },
      { x: 432, y: 504 },
      { x: 473, y: 348 },
      { x: 374, y: 193 },
      { x: 981, y: 48 },
      { x: 745, y: 285 },
      { x: 565, y: 322 }
    ]
  },
  {
    leftImageSrc: "assets/images/set13-left.jpg",
    rightImageSrc: "assets/images/set13-right.jpg",
    correctSpots: [
      { x: 243, y: 148 },
      { x: 536, y: 221 },
      { x: 123, y: 373 },
      { x: 11, y: 559 },
      { x: 195, y: 573 },
      { x: 301, y: 540 },
      { x: 473, y: 532 },
      { x: 688, y: 485 },
      { x: 603, y: 630 },
      { x: 253, y: 721 },
      { x: 263, y: 892 },
    ]
  },
  {
    leftImageSrc: "assets/images/set14-left.jpg",
    rightImageSrc: "assets/images/set14-right.jpg",
    correctSpots: [
      { x: 911, y: 36 },
      { x: 536, y: 165 },
      { x: 710, y: 229 },
      { x: 583, y: 381 },
      { x: 252, y: 409 },
      { x: 89, y: 331 },
      { x: 912, y: 594 },
      { x: 105, y: 773 },
      { x: 455, y: 772 },
      { x: 677, y: 863 },
      { x: 851, y: 810 },
    ]
  },
  {
    leftImageSrc: "assets/images/set15-left.jpg",
    rightImageSrc: "assets/images/set15-right.jpg",
    correctSpots: [
      { x: 290, y: 54 },
      { x: 509, y: 52 },
      { x: 68, y: 178 },
      { x: 242, y: 372 },
      { x: 422, y: 372 },
      { x: 702, y: 341 },
      { x: 398, y: 499 },
      { x: 11, y: 508 },
      { x: 101, y: 677 },
      { x: 320, y: 925 },
      { x: 740, y: 544 },
      { x: 677, y: 775 },
    ]
  },
  // Add more image sets here as you want
];

let currentSet = 0; // Keep track of the current image set
let correctSpots = [];

// Reset the game for the next set
function resetGame() {
  differencesLeft = imageSets[currentSet].correctSpots.length;
  hintsLeft = 3;

  // Update images
  leftImage.src = imageSets[currentSet].leftImageSrc;
  rightImage.src = imageSets[currentSet].rightImageSrc;

  // Get a fresh copy of the correct spots for the current set
  correctSpots = [...imageSets[currentSet].correctSpots];

  // Hide "Next" button until all differences are found
  nextButton.style.display = "none";

  updateStatus();
  clearCircles();
}

// Update the score and hints display
function updateStatus() {
  document.getElementById("score").innerHTML = `Differences: <strong>${differencesLeft}</strong>/${imageSets[currentSet].correctSpots.length}`;
  document.getElementById("hints").innerHTML = `Hints: <strong>${hintsLeft}</strong>/3`;
}

// Clear any circles from the screen
function clearCircles() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach(circle => circle.remove());
}

// Function to check clicks on images
function checkClick(event, image) {
  const rect = image.getBoundingClientRect();
  const scaleX = image.naturalWidth / rect.width;
  const scaleY = image.naturalHeight / rect.height;
  const clickX = (event.clientX - rect.left) * scaleX;
  const clickY = (event.clientY - rect.top) * scaleY;

  let found = false;

  // Log the position of the click to help with debugging
  console.log(`Clicked at: (${clickX}, ${clickY})`);

  for (let i = 0; i < correctSpots.length; i++) {
    const spot = correctSpots[i];

    if (Math.abs(clickX - spot.x) <= 20 && Math.abs(clickY - spot.y) <= 20) {
      found = true;
      correctSpots.splice(i, 1); // Remove the correct spot from the array
      differencesLeft--; // Decrease remaining differences

      // Play sound if sound is enabled
      if (soundEnabled) correctSound.play();

      // Draw circle on the correct image
      markDifference(event.clientX, event.clientY, image);

      updateStatus();

      // Check if the game is complete
      if (differencesLeft === 0) {
        setTimeout(() => {
          alert("🎉 You found all differences!");
          nextButton.style.display = "inline-block"; // Show the "Next" button
        }, 500);
      }
      break;
    }
  }

  // If no match was found, play the error sound (if enabled)
  if (!found && soundEnabled) {
    errorSound.play();
  }
}

// Function to draw a circle around the clicked difference
function markDifference(x, y) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 5}px`; // Adjust for center alignment
  circle.style.top = `${y - 5}px`;
  document.getElementById("gameContainer").appendChild(circle);
}
// Handle hints button click
hintsButton.addEventListener("click", function () {
  if (hintsLeft > 0 && correctSpots.length > 0) {
    const rect = leftImage.getBoundingClientRect(); // Get image dimensions
    const scaleX = leftImage.naturalWidth / rect.width;
    const scaleY = leftImage.naturalHeight / rect.height;

    const hintSpot = correctSpots[Math.floor(Math.random() * correctSpots.length)];
    const adjustedX = hintSpot.x / scaleX + rect.left;
    const adjustedY = hintSpot.y / scaleY + rect.top;

    const hintCircle = document.createElement("div");
    hintCircle.classList.add("hint-circle");
    hintCircle.style.left = `${adjustedX}px`;
    hintCircle.style.top = `${adjustedY}px`;

    document.getElementById("gameContainer").appendChild(hintCircle);

    setTimeout(() => {
      hintCircle.style.opacity = "0";
      setTimeout(() => hintCircle.remove(), 200);
    }, 600);

    hintsLeft--;
    updateStatus();
  } else {
    alert("⚠️ No more hints left!"); // Show warning if no hints remain
  }
});

// Add event listeners to both images
leftImage.addEventListener("click", (e) => checkClick(e, leftImage));
rightImage.addEventListener("click", (e) => checkClick(e, rightImage));

// Load the next set of images when the "Next" button is clicked
nextButton.addEventListener("click", function () {
  currentSet = (currentSet + 1) % imageSets.length; // Move to next set, loop back to first set if at the end
  resetGame(); // Reset for the next set
});

let musicEnabled = false;
const musicTracks = [
  document.getElementById("bg-music-1"),
  document.getElementById("bg-music-2"),
  document.getElementById("bg-music-3")
];
let currentMusic = null;

document.getElementById("music-toggle").addEventListener("click", function () {
  if (!musicEnabled) {
    // Pick a random music track
    currentMusic = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    currentMusic.loop = true; // Ensure it loops
    currentMusic.volume = 0.5; // Adjust volume (optional)
    currentMusic.play();

    musicEnabled = true;
    this.textContent = "🎵 Music On";
  } else {
    // Stop music
    if (currentMusic) currentMusic.pause();
    musicEnabled = false;
    this.textContent = "🚫 Music Off";
  }
});

// Toggle sound on/off
soundToggleButton.addEventListener("click", function () {
  soundEnabled = !soundEnabled;
  this.textContent = soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
});

// Initialize game with the first set of images
resetGame();
