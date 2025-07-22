let secretNumber, attempts, score;
const maxAttempts = 10;
const leaderboardKey = "guessGame_leaderboard";

const resultMessage = document.getElementById("resultMessage");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");
const hintDisplay = document.getElementById("hint");
const userInput = document.getElementById("userGuess");
const nameInput = document.getElementById("playerName");
const playAgainBtn = document.getElementById("playAgainBtn");
const winSound = document.getElementById("winSound");
const leaderboardList = document.getElementById("leaderboardList");

function generateSecretNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function initializeGame() {
  secretNumber = generateSecretNumber();
  attempts = 0;
  score = 100;
  resultMessage.textContent = "";
  hintDisplay.textContent = "";
  attemptsDisplay.textContent = attempts;
  scoreDisplay.textContent = score;
  userInput.value = "";
  nameInput.value = "";
  userInput.disabled = false;
  nameInput.disabled = false;
  playAgainBtn.classList.add("hidden");
  loadLeaderboard();
}

function checkGuess() {
  const guess = parseInt(userInput.value);
  const playerName = nameInput.value.trim();

  if (!playerName) {
    alert("Please enter your name!");
    return;
  }

  if (isNaN(guess) || guess < 1 || guess > 20) {
    resultMessage.textContent = "⛔ Enter a number between 1 and 20!";
    resultMessage.style.color = "red";
    return;
  }

  attempts++;
  score = Math.max(0, 100 - (attempts - 1) * 10);
  attemptsDisplay.textContent = attempts;
  scoreDisplay.textContent = score;

  if (guess === secretNumber) {
    resultMessage.textContent = `🎉 Correct! You scored ${score}`;
    resultMessage.style.color = "green";
    userInput.disabled = true;
    nameInput.disabled = true;
    playAgainBtn.classList.remove("hidden");
    launchConfetti();
    playWinSound();
    saveHighScore(playerName, score);
  } else if (attempts >= maxAttempts) {
    resultMessage.textContent = `❌ Game Over! The number was ${secretNumber}`;
    resultMessage.style.color = "red";
    userInput.disabled = true;
    nameInput.disabled = true;
    playAgainBtn.classList.remove("hidden");
  } else {
    resultMessage.textContent = guess < secretNumber ? "📉 Too low!" : "📈 Too high!";
    resultMessage.style.color = guess < secretNumber ? "blue" : "orange";

    if (attempts === 3) {
      const hint = Math.abs(secretNumber - guess) <= 2
        ? "🔥 You're very close!"
        : secretNumber % 2 === 0
        ? "💡 It's an even number." : "💡 It's an odd number.";
      hintDisplay.textContent = hint;
    }
  }
}

function resetGame() {
  initializeGame();
}

function toggleTheme() {
  const html = document.documentElement;
  const button = document.getElementById("theme-toggle");

  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    button.textContent = "☀️ Toggle Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "🌙 Toggle Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;
  const button = document.getElementById("theme-toggle");

  if (savedTheme === "dark") {
    html.classList.add("dark");
    button.textContent = "☀️ Toggle Light Mode";
  } else {
    html.classList.remove("dark");
    button.textContent = "🌙 Toggle Dark Mode";
  }
  initializeGame(); 
});



function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    confetti({ ...defaults, particleCount: 50, origin: { x: Math.random(), y: Math.random() - 0.2 } });
  }, 250);
}

function playWinSound() {
  winSound.currentTime = 0;
  winSound.play();
}

function saveHighScore(name, score) {
  const leaderboard = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem(leaderboardKey, JSON.stringify(leaderboard.slice(0, 5)));
  loadLeaderboard();
}

function loadLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  leaderboardList.innerHTML = leaderboard.map(entry =>
    `<li>${entry.name}: ${entry.score} pts</li>`
  ).join("");
}

initializeGame();



