// ./Resources/kernel/TV-code/tvEnhancer.js

var tvDisplay = document.getElementById("tvDisplay");
var ledNotif = document.getElementById("ledNotif");
var tvButtons = document.getElementById("tvButtons");
var isTVOn = false;

tvDisplay.addEventListener("mouseenter", function() {
  tvButtons.style.display = "flex";
});

tvDisplay.addEventListener("mouseleave", function() {
  if (!isHovering(tvButtons)) {
    tvButtons.style.display = "none";
  }
});

tvButtons.addEventListener("mouseenter", function() {
  tvButtons.style.display = "flex";
});

tvButtons.addEventListener("mouseleave", function() {
  tvButtons.style.display = "none";
});

function isHovering(element) {
  return (element.parentElement.querySelector(":hover") === element);
}
