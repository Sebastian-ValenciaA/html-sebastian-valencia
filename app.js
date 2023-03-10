document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "img/ 1.jpg"
    },
    {
      name: "2",
      img: "img/ 2.jpg"
    },
    {
      name: "3",
      img: "img/ 3.jpg"
    },
    {
      name: "4",
      img: "img/ 4.jpg"
    },
    {
      name: "5",
      img: "img/ 5.jpg"
    },
    {
      name: "6",
      img: "img/ 6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];

  function creartablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setattribute("data-id", i);

      carta.addEventListener("click", voltearcarta);

      cuadricula.appendchild(carta);
    }
  }
  function voltearcarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  creartablero();
});
