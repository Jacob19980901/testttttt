// navbar
window.addEventListener("scroll", function () {
  let header = document.querySelectorByID(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {
  let links = $(".menu a, .down-menu a");
  links.click(function (e) {
    e.preventDefault();
    links.removeClass("active");
    let menuHeight = $(".menu").innerHeight();
    let id = $(this).addClass("active").attr("href");
    let target = $(id).offset().top - menuHeight;
    $("html").animate(
      {
        scrollTop: target,
      },
      1000
    );
  });
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    links.each(function () {
      let attr = $(this).attr("href");
      let position = $(attr).offset().top - 135;
      if (scroll >= position) {
        links.removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
// end navbar

// clint slider
let inner = document.querySelector(".carusel-inner");
let move = 0;
let timer;
autoplay();

function autoplay() {
  timer = setTimeout(left, 6000);
}

function left() {
  move -= 170;
  if (move < -1200) {
    move = 0;
  }
  inner.style.left = move + "px";
  clearTimeout(timer);
  autoplay();
}

function right() {
  if (move == 0) {
    move = -1200;
  } else {
    move += 170;
  }
  inner.style.left = move + "px";
}

//end clint slider

let i = 0;
let j = 4;

const dots = document.querySelectorAll(".dot-container button");

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("activce");
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("activce");
}

function indicator(num) {
  dots.forEach(function (dot) {
    dot.style.bacgroundColor = "transparent";
  });
  document.querySelector(
    "dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#8052ec";
}

// end test carusel

/////// to top\\\\\\\\\\
$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > 50) {
      $("#to-top").fadeIn();
    } else {
      $("#to-top").fadeOut();
    }
  });
  $("#to-top").click(function () {
    $("html").animate({
      scrollTop: 0,
    });
  });
});
/////// end  to top\\\\\\\\\\
