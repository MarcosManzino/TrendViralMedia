const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

let currentImage = 'img1';

btn1.addEventListener('click', () => {
  if (currentImage === 'img2') {
    currentImage = 'img1';
    animateImages(img2, img1);
  }
});

btn2.addEventListener('click', () => {
  if (currentImage === 'img1') {
    currentImage = 'img2';
    animateImages(img1, img2);
  }
});

function animateImages(hideImg, showImg) {
  hideImg.style.opacity = '0';
  showImg.style.opacity = '1';
  
  setTimeout(() => {
    hideImg.style.zIndex = '1';
    showImg.style.zIndex = '2';
  }, 1000);
}
