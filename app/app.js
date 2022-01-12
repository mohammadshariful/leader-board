"use strict";

const navLinks = document.querySelector(".nav-links");
const menuBar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");

function navItem(state1, state2, size) {
  menuBar.style.display = state1;
  navLinks.style.left = size;
  close.style.display = state2;
}

menuBar.addEventListener("click", () => navItem("none", "block", 0));
close.addEventListener("click", () => navItem("block", "none", "-200px"));
