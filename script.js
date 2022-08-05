let valeur = document.querySelector("#entry");
let entrees = document.querySelectorAll(".btn");
let resultat = 0;

document.querySelectorAll(".btn0").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (valeur.value == "") {
      valeur.value = "";
    } else {
      valeur.value += e.target.value;
    }
  });
});

entrees.forEach((entree) => {
  entree.addEventListener("click", function (e) {
    valeur.value += e.target.value;
  });
});

document.getElementById("plusmoins").addEventListener("click", function () {
  if (valeur.value[0] == "-") {
    valeur.value = valeur.value;
  } else {
    valeur.value = "-" + valeur.value;
  }
});

// document.querySelectorAll(".signess").forEach((signe) => {
//   signe.addEventListener("click", function (elt) {
//     if (valeur.value != "") {
//       console.log(valeur.value);
//       if (isNaN(valeur.value[valeur.value.length - 2])) {
//         valeur.value = valeur.value.slice(0, -1);
//         valeur.value[valeur.value.length] = elt.target.value;
//       } else {
//         valeur.value += elt.target.value;
//       }
//     }
//   });
// });

document.getElementById("delete").addEventListener("click", function () {
  valeur.value = valeur.value.slice(0, -1);
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  valeur.value = "";
});
const res = document.querySelector("#egal");
res.addEventListener("click", function () {
  valeur.value = eval(valeur.value);
});

document.getElementById("carre").addEventListener("click", function () {
  valeur.value = eval(valeur.value) * eval(valeur.value);
});

document.getElementById("factorielle").addEventListener("click", function () {
  function fact(n) {
    if (n <= 1) {
      return 1;
    }
    return n * fact(n - 1);
  }
  valeur.value = fact(valeur.value);
});
