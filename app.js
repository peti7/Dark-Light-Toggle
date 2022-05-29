'use strict';

const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    toggle.classList.toggle("active");
    document.body.classList.toggle('active');
});