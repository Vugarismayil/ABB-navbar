function toggleSearchBox() {
  var searchBox = document.querySelector(".search-box");
  if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
}

function toggleMenu() {
  var menu = document.getElementById("language-menu");
  var arrow = document.getElementById("arrow");
  menu.classList.toggle("hidden");


  if (menu.classList.contains("hidden")) {
    arrow.style.transform = "rotate(90deg)";
  } else {
    arrow.style.transform = "rotate(-270deg)";
  }
}

function changeLanguage(lang) {
  var language = document.getElementById("language");


  language.textContent = lang;

  toggleMenu();
}
