// theme light, dark
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
})

// advertisement
const ad1 = document.querySelector('#advertisement-1');
const ad2 = document.querySelector('#advertisement-2');

function ad(num) {
  console.log(num);
  if (num == 1) {
    ad1.style.display = "grid";
    ad2.style.display = "none";
  } else {
    ad1.style.display = "none";
    ad2.style.display = "grid";
  }
}