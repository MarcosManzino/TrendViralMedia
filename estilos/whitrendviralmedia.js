const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

btn1.addEventListener('click', () => {
  img1.style.display = 'block';
  img2.style.display = 'none';
});

btn2.addEventListener('click', () => {
  img1.style.display = 'none';
  img2.style.display = 'block';
});
