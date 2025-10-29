// Mensaje de bienvenida
console.log("Bienvenido a StyleTrend - Página cargada correctamente");

// Animación suave para los productos
const productos = document.querySelectorAll('.item');
productos.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = "scale(1.05)";
    item.style.transition = "0.3s ease";
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = "scale(1)";
  });
});

// Simulación de agregar al carrito
const botones = document.querySelectorAll('.item button');
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    alert("Producto agregado al carrito");
  });
});