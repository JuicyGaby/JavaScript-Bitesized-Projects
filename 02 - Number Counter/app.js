// the initial value of the counter
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // changing the color depending on its value
    if (count > 0 ) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  })
})


