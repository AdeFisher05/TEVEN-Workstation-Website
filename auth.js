const register = document.getElementById("register");
const signIn = document.getElementById("sign-in");
const memberAuth = document.querySelector(".member-auth");
const userAuth = document.querySelector(".user-auth");

// SIGN IN / REGISTER TOGGLE

register.addEventListener("click", () => {
  signIn.classList.remove("active");
  register.classList.add("active");

  memberAuth.style.display = "none";
  userAuth.style.display = "block";
});

signIn.addEventListener("click", () => {
  register.classList.remove("active");
  signIn.classList.add("active");

  userAuth.style.display = "none";
  memberAuth.style.display = "block";
});
// REGISTRATION STEPS

const firstForm = document.getElementById("first-form");
const secondForm = document.getElementById("second-form");
const thirdForm = document.getElementById("third-form");

const firstRegistrationForm = firstForm.querySelector("form");
const secondRegistrationForm = secondForm.querySelector("form");
const thirdRegistrationForm = thirdForm.querySelector("form");

const back = document.getElementById("back");
const backTwo = document.getElementById("back-two");

// Step 1 → Step 2
firstRegistrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  firstForm.style.display = "none";
  secondForm.style.display = "block";
  thirdForm.style.display = "none";

  updateProgress(67);
});

// Step 2 → Step 3
secondRegistrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  firstForm.style.display = "none";
  secondForm.style.display = "none";
  thirdForm.style.display = "block";

  updateProgress(100);
});

// Step 2 → Step 1
back.addEventListener("click", () => {
  secondForm.style.display = "none";
  thirdForm.style.display = "none";
  firstForm.style.display = "block";
  updateProgress(33);
});

// Step 3 → Step 2
backTwo.addEventListener("click", () => {
  firstForm.style.display = "none";
  thirdForm.style.display = "none";
  secondForm.style.display = "block";
  updateProgress(67);
});

// PROGRESS BAR

function updateProgress(width) {
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar) => {
    bar.style.width = `${width}%`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  updateProgress(33);
});
// FILE INPUTS

const selfieInput = document.getElementById("selfie");
const ninInput = document.getElementById("nin");

const selfieLabel = document.getElementById("selfie-label");
const ninLabel = document.getElementById("nin-label");

selfieInput.addEventListener("change", () => {
  if (selfieInput.files.length > 0) {
    selfieLabel.textContent = selfieInput.files[0].name;
  } else {
    selfieLabel.textContent = "Upload photo";
  }
});

ninInput.addEventListener("change", () => {
  if (ninInput.files.length > 0) {
    ninLabel.textContent = ninInput.files[0].name;
  } else {
    ninLabel.textContent = "Scan / photo";
  }
});

// PASSWORD VALIDATION

const registerPassword = document.getElementById("register-password");
const confirmPassword = document.getElementById("confirm-password");

thirdRegistrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (registerPassword.value.length < 8) {
    alert("Password must be at least 8 characters long.");
    registerPassword.focus();
    return;
  }
  if (registerPassword.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    confirmPassword.focus();
    return;
  }
  // Account creation will be connected here later.
  alert("All registration details are valid!");
});
