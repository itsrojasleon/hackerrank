const btn = document.getElementById('btn');

btn.innerHTML = 0;

function add() {
  btn.innerHTML = Number(btn.textContent) + 1;
}

btn.addEventListener('click', add);
