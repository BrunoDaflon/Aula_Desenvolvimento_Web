const button = document.getElementById("mudar-lingua");
let ingles = false;

const menu = document.querySelectorAll(".menu li a");

button.addEventListener("click", () => {
  if (!ingles) {
    alert("127.0.0.1:5500 diz\ntexto em inglês");

    menu[0].textContent = "Home";
    menu[1].textContent = "Highlight";
    menu[2].textContent = "Catalog";

    document.querySelector("h1").textContent = "A special food for a fantastic friend!";
    document.querySelector("footer p").textContent = "Akihabara Avenue, 123 / Phone: 91234-5678";


    button.textContent = "Português";
    ingles = true;
  } else {

    menu[0].textContent = "Início";
    menu[1].textContent = "Destaque";
    menu[2].textContent = "Catálogo";

    document.querySelector("h1").textContent = "Uma ração especial, para um amigo fantástico!";
    document.querySelector("footer p").textContent = "Avenida Akihabara, 123 / Tel: 91234-5678";

    button.textContent = "Inglês";
    ingles = false;
  }
});