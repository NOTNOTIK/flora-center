let bg = document.querySelector(".promo__flowers-2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = "translate(-" + x * 6 + "px, -" + y * 6 + "px)";
});
