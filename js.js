function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topmenu") {
      x.className += " responsive";
    } else {
      x.className = "topmenu";
    }
  }

  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


document.querySelector('.language-btn').addEventListener('click', function() {
  const dropdown = document.querySelector('.language-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú cuando se hace clic fuera
document.addEventListener('click', function(event) {
  const selector = document.querySelector('.language-selector');
  if (!selector.contains(event.target)) {
      document.querySelector('.language-dropdown').style.display = 'none';
  }
});