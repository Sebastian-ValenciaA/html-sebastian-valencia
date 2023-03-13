document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "img/1.jpg"
    },
    {
      name: "2",
      img: "img/2.jpg"
    },
    {
      name: "3",
      img: "img/3.jpg"
    },
    {
      name: "4",
      img: "img/4.jpg"
    },
    {
      name: "5",
      img: "img/5.jpg"
    },
    {
      name: "6",
      img: "img/6.jpg"
    },
    {
      name: "7",
      img: "img/7.jpg"
    },
    {
      name: "8",
      img: "img/8.jpg"
    },
    {
      name: "blank",
      img: "img/blank.png"
    },
    {
      name: "reverso",
      img: "img/reverso.png"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "img/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1500);
    }
  }

  crearTablero();
});
