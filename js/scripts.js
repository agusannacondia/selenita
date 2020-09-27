function myFunction(x) {
    if (x.matches) {
      document.getElementById("menu").style.transform = "translateX(0)";
      document.getElementById("menuButton").style.display = "none";
      document.getElementById("menu").style.transition = "transform 0s";

    } else {
      document.getElementById("menu").style.transform = "translateX(-250px)";
      document.getElementById("menuButton").style.display = "inline-block";
      document.getElementById("menu").style.boxShadow = "none";
      document.getElementById("menu").style.transition = "transform 0s";
    }
  }

  var x = window.matchMedia("(min-width: 801px)")
  myFunction(x)
  x.addListener(myFunction)

  // Animacion burger button

  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    e.preventDefault();
  });

  //Function open&close menu

  window.estado = 0;

  function openNav(estado) {
    if (estado == 0) {
      document.getElementById("menu").style.transform = "translateX(0)";
      document.getElementById("menu").style.boxShadow = "0px 0px 30px rgba(127, 137, 161, 0.5)";
      document.getElementById("menu").style.transition = "all 1s";

      window.estado++;
    } else if (estado == 1) {
      document.getElementById("menu").style.transform = "translateX(-250px)";
      document.getElementById("menu").style.boxShadow = "none";
      document.getElementById("menu").style.transition = "all 1s";
      window.estado--;
    }
  }