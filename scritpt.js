// Mensaje de bienvenida
alert("Bienvenido a StyleTrend, donde la moda cobra vida!");

// Mostrar un mensaje en consola
console.log("Página cargada correctamente.");

// Pequeña animación para los productos
const productos = document.querySelectorAll('.item');
productos.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = "scale(1.05)";
    item.style.transition = "0.3s";
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
  });
});