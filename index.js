let bg = document.querySelector(".promo__flowers-2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = "translate(-" + x * 6 + "px, -" + y * 6 + "px)";
});

// Используем JavaScript для создания анимации движущегося текста при скролле

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  // Изменяем позицию текста относительно скролла
  text1.style.transform = "translateX(" + -scrollPosition * 0.175 + "px)";
  text2.style.transform = "translateX(" + scrollPosition * 0.175 + "px)";
  text3.style.transform = "translateX(" + -scrollPosition * 0.175 + "px)";
  text4.style.transform = "translateX(" + scrollPosition * 0.175 + "px)";
});
