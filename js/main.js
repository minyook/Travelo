var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", createNavbar);

document.addEventListener("DOMContentLoaded", () => {
  const postWriteBtn = document.getElementById("postWriteBtn");
  postWriteBtn.addEventListener("click", () => {
    window.location.href = "../Post/PostWrite.html";
  });
});

const mypageButton = document.querySelector(".mypage");

// 로그아웃 버튼에 클릭 이벤트를 추가합니다.
loginButton.addEventListener("click", function () {
  // 로그인 화면으로 이동합니다.
  window.location.href = "/html/mypage.html";
});
