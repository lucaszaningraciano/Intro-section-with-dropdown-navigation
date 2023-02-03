function openMenu1() {
  let features = document.getElementById("features");
  let featuresMenu = document.getElementById("features-menu");
  let arrowDown = document.getElementById("arrow-down");
  let arrowUp = document.getElementById("arrow-up");

  document.getElementById("features-menu").style.display = "block";
  document.getElementById("arrow-down").style.display = "none";
  document.getElementById("arrow-up").style.display = "block";
}

function closeMenu1() {
  let features = document.getElementById("features");
  let featuresMenu = document.getElementById("features-menu");
  let arrowUp = document.getElementById("arrow-up");

  document.getElementById("features-menu").style.display = "none";
  document.getElementById("arrow-up").style.display = "none";
  document.getElementById("arrow-down").style.display = "block";
}

function openMenu2() {
  let company = document.getElementById("company");
  let companyMenu = document.getElementById("company-menu");
  let arrowDown2 = document.getElementById("arrow-down2");
  let arrowUp2 = document.getElementById("arrow-up2");

  document.getElementById("company-menu").style.display = "block";
  document.getElementById("arrow-down2").style.display = "none";
  document.getElementById("arrow-up2").style.display = "block";
}

function closeMenu2() {
  let features = document.getElementById("company");
  let featuresMenu = document.getElementById("company-menu");
  let arrowUp = document.getElementById("arrow-up");

  document.getElementById("company-menu").style.display = "none";
  document.getElementById("arrow-up2").style.display = "none";
  document.getElementById("arrow-down2").style.display = "block";
}

function openMenu3() {
  let menuMobile = document.getElementById("menu-bar-container");
  let menuBar = document.getElementById("menu-bar");

  document.getElementById("menu-bar-container").style.display = "block";
}

function closeMenuMobile() {
  let menuMobile = document.getElementById("menu-bar-container");
  let closeMobile = document.getElementById("close-menu");

  document.getElementById("menu-bar-container").style.display = "none";
}
