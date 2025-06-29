console.log("JavaScript file is now connected");

window.addEventListener("load", function () {
  alert("Welcome to the Wellness Weekend!");
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = "#f3cd89";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openContact() {
    alert("Email us at hello@wellnessweekend.com");
}

