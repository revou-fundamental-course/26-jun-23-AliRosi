function setTitle(element) {
  const text = element.innerText;

  document.title = `${text} | E-Groceries`;
}

function toggleMenuButton() {
  document.getElementById("menu-list").classList.toggle("show");
}

function getStartButton() {
  const bannerHeight = document.getElementById("hero").clientHeight;
  const headerHeight =
    document.getElementsByClassName("header")[0].clientHeight;

  window.scrollBy(0, bannerHeight - headerHeight);
}

// slideShow //
const heroSlider = document.getElementById("hero-slider");
const windowWidth = heroSlider.clientWidth;

let index = 1;

heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;

setInterval(() => {
  if (index == 6) return;

  index++;

  heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
  heroSlider.style.transition = "all 2s ease-in-out";
}, 6000);

heroSlider.addEventListener("transitionend", () => {
  if (document.getElementById(`slide${index}`).id == "slide6") {
    heroSlider.style.transition = "none";
    index = 0;
    heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
  }
});

// validation //
function validateForm() {
  const name = document.forms["contact-form"]["name"].value;
  const email = document.forms["contact-form"]["email"].value;
  const interest = document.forms["contact-form"]["interest"].value;

  const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/);

  if (!name) {
    const errName = document.getElementById("name-error");

    errName.style.display = "block";
    errName.style.visibility = "visible";
  }

  if ((email && !isEmail) || !email) {
    const errEmail = document.getElementById("email-error");

    errEmail.style.display = "block";
    errEmail.style.visibility = "visible";
  }

  if (interest === "none") {
    const errInterest = document.getElementById("interest-error");

    errInterest.style.display = "block";
    errInterest.style.visibility = "visible";
  }

  if (name && email && isEmail && interest !== "none") {
    alert(`Data anda telah sukses terkirim, ${name}`);

    return false;
  }

  return false;
}

function fillInput(fieldName) {
  const inputValue = document.getElementById(fieldName).value;
  const errorText = document.getElementById(`${fieldName}-error`);

  if (inputValue && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}

function selectInterest() {
  const interestValue = document.getElementById("interest").value;
  const errorText = document.getElementById("interest-error");

  if (interestValue !== "none" && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}
