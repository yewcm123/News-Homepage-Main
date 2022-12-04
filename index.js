const navbar = document.getElementById("navbar");
const closeMenuButton = document.getElementById("active-menu-button");
const openMenuButton = document.getElementById("inactive-menu-button");

function openSidebar() {
  document.body.style.backgroundColor = "gray";
  navbar.classList.add("active");
  navbar.classList.remove("inactive");
  openMenuButton.classList.remove("active");
  openMenuButton.classList.add("inactive");
  closeMenuButton.classList.remove("inactive");
  closeMenuButton.classList.add("active");
}

function closeSidebar() {
  document.body.style.backgroundColor = "white";
  navbar.classList.add("inactive");
  navbar.classList.remove("active");
  closeMenuButton.classList.remove("active");
  closeMenuButton.classList.add("inactive");
  openMenuButton.classList.remove("inactive");
  openMenuButton.classList.add("active");
}

function showNavbar() {
  navbar.classList.add("active");
  navbar.classList.remove("inactive");
  closeMenuButton.classList.add("inactive");
  closeMenuButton.classList.remove("active");
  openMenuButton.classList.add("inactive");
  openMenuButton.classList.remove("active");
}

if (window.innerWidth < 400) {
  closeSidebar();
} else {
  navbar.classList.add("active");
  openMenuButton.classList.add("inactive");
  openMenuButton.classList.remove("active");
}

onresize = () => {
  if (window.innerWidth < 400) {
    closeSidebar();
  } else {
    console.log("openm");
    showNavbar();
  }
};

closeMenuButton.addEventListener("click", () => {
  closeSidebar();
});

openMenuButton.addEventListener("click", () => {
  openSidebar();
});
