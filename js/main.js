// Obtener el elemento <canvas> del documento HTML mediante su id
var canvas = document.getElementById("canvas");

// Obtener el contexto de dibujo en 2D del canvas
// Este contexto proporciona métodos para dibujar gráficos
var ctx = canvas.getContext("2d");

// Establecer el color de relleno para las figuras dibujadas en el canvas
ctx.fillStyle = "rgb(14, 254, 230)"; // Se define el color azul para el relleno del rectángulo

// Dibujar un rectángulo relleno en el canvas
// fillRect(x, y, width, height)
//  - x: Posición en el eje X (desde la izquierda del canvas) -> 10 píxeles
//  - y: Posición en el eje Y (desde la parte superior del canvas) -> 10 píxeles
//  - width: Ancho del rectángulo -> 200 píxeles
//  - height: Alto del rectángulo -> 150 píxeles
ctx.fillRect(10, 10, 200, 150);

