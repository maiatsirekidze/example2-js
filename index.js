const cube = document.getElementById('cube');
let toggled = false;

cube.addEventListener('click', () => {
  if (toggled) {
    cube.style.backgroundColor = 'teal';
    cube.textContent = 'click 1';
  } else {
    cube.style.backgroundColor = 'crimson';
    cube.textContent = 'click 2';
  }
  toggled = !toggled;
});
