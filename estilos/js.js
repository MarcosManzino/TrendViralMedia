const mainInicio = document.querySelector('.main--inicio');
let xPercent = 50;
let yPercent = 50;
let isMouseOver = false;

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

mainInicio.addEventListener('mousemove', (e) => {
    isMouseOver = true;
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    xPercent = lerp(xPercent, 40 + x / mainInicio.offsetWidth * 20, 0.1);
    yPercent = lerp(yPercent, 40 + y / mainInicio.offsetHeight * 20, 0.1);
});

mainInicio.addEventListener('mouseleave', () => {
    isMouseOver = false;
});

function animate() {
    if (!isMouseOver) {
        xPercent = lerp(xPercent, 50, 0.1);
        yPercent = lerp(yPercent, 50, 0.1);
    }

    mainInicio.style.setProperty('--x', `${xPercent}%`);
    mainInicio.style.setProperty('--y', `${yPercent}%`);

    requestAnimationFrame(animate);
}

animate();
