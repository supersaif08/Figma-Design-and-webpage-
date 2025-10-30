// Small parallax motion effect for the shoe
const shoe = document.querySelector('.shoe');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;
  shoe.style.transform = `rotate(-10deg) translate(${x}px, ${y}px)`;
});
