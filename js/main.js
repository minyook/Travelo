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
