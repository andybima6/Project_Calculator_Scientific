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

// Logika Sin
function sin() {
  screen.value = Math.sin(screen.value);
}

// Logika Cos
function cos() {
  screen.value = Math.cos(screen.value);
}
// Logika Tan
function tan() {
  screen.value = Math.tan(screen.value);
}

// Logika Pow (Pangkat)
function pow() {
  screen.value = Math.pow(screen.value, 2);
}

// Logika SQRT (Akar Kuadrt)
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

// Logika Log
function log() {
  screen.value = Math.log(screen.value, 2);
}

// Logika pi
function pi() {
  (screen.value = 3), 141592;
}

// Logika e (bilangan Euler)
function e() {
  (screen.value = 2), 71828;
}

// Logika faktorial
function fact() {
  var i, num, f;

  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;

  screen.value = f;
}

// Logika Backspace
function backspace() {
    screen.value = screen.value.substr(0,screen.value.length)
}
