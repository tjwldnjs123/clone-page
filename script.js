// 텍스트 작성과 즉시실행 함수
(function () {
  const spanEl = document.querySelector("main h2 span");
  const textArr = [
    "Front-End Developer",
    "Web Publisher",
    "Back-End Developer",
  ];
  let index = 0;
  let currentTxt = textArr[index].split("");

  function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, 500);
    } else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 2000);
    }
  }

  function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, 500);
    } else {
      index = (index + 1) % textArr.length;
      currentTxt = textArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();

// 수직 스크롤이 발생하면 header태그에 active 클래스 추가 및 삭제
(function () {
  const headerEl = document.querySelector("header");
  window.addEventListener("scroll", function () {
    // 함수최적화하기위해서 requesstAnimationFrame 사용
    requestAnimationFrame(scrollCheck);
  });

  function scrollCheck() {
    const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
      headerEl.classList.add("active");
    } else {
      headerEl.classList.remove("active");
    }
  }
})();

// data-animaiton-scroll이 true인것만 찾아줌
const scrollMoveEl = document.querySelectorAll(
  "[data-animation-scroll='true']"
);

// 애니메이션 스크롤
function animationMove(selector) {
  const target = document.querySelector(selector);
  const browserScrollY = window.scrollY;
  const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({ top: targetScrollY, behavior: "smooth" });
}

for (let i = 0; i < scrollMoveEl.length; i++) {
  scrollMoveEl[i].addEventListener("click", function (e) {
    animationMove(e.target.dataset.target);
  });
}
