const register = document.getElementById("register");
const signIn = document.getElementById("sign-in");
const memberAuth = document.querySelector(".member-auth");
const userAuth = document.querySelector(".user-auth");
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
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + "%";
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  progressBars.forEach((bar) => observer.observe(bar));
});

const firstBtn = document.getElementById("first-btn");
const firstForm = document.getElementById("first-form");
const secondForm = document.getElementById("second-form");
const back = document.getElementById("back");
firstBtn.addEventListener("click", (e) => {
  e.preventDefault();
  firstForm.style.display = "none";
  secondForm.style.display = "block";
});
back.addEventListener("click", () => {
  secondForm.style.display = "none";
  firstForm.style.display = "block";
});

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