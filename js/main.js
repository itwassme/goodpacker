const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const sections = document.querySelectorAll('section')

// scrollbar
document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height; 
  const totalScrollableDistance = pageHeight - window.innerHeight; 

  const percentage = (pixels / totalScrollableDistance) * 100;
  progressTag.style.width = `${percentage}%`;

  // change the progress bar's color when bg is white
  sections.forEach(section => {
    if(section.offsetTop - 20 <= pixels) {
      if(section.hasAttribute("bg-is-blue")){
        progressTag.classList.add("blue")
      } else {
        progressTag.classList.remove("blue")
      }
    }
  })

});

const divChange = document.querySelector('div.change')

// 굿패커 작업내용 애니메이션
document.addEventListener("scroll", function(){
  const pixels = window.pageYOffset; //top of the viewport
  const pageHeight = bodyTag.getBoundingClientRect().height; // Document Height: 3200px
  const totalScrollableDistance = pageHeight - window.innerHeight;
  const percentage = (pixels / totalScrollableDistance) * 100;

  console.log(percentage)
  if(percentage > 52 && percentage < 62 ) {
    divChange.innerHTML = `<h2 class="ma0 mt4 mb2 highlight">2. 소분, 분류, 패킹</h2>
    <p class="ma0">정량에 따라 분류, 개별 포장</p>`
  } else if (percentage >= 62) {
    divChange.innerHTML = `<h2 class="ma0 mt4 mb2 highlight">3. 출고 및 택배 발송</h2>
    <p class="ma0">대량 박스 포장, 발송 대행</p>`
  } else {
    divChange.innerHTML = `<h2 class="ma0 mt4 mb2 highlight">1. 제품 제작 및 조립</h2>
    요청 가이드에 따라 맞춤 제작,<br />다품종 소량 제작 가능`
  }
  
})

