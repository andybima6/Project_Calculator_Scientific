
// merubah yang mempunyai id screen ada div btn yang dimana dilakukan perulangan
// ketika click .btn maka nilai tersebut ditambahkan di screen
var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "x") {
      btntext = "*";
    }

    if (btntext == "÷") {
        btntext = "/";
      }

    screen.value += btntext;
  });
}
