/**
 * Configuración global para la animación de los pétalos
 */

// Tiempo entre caída de pétalos (en milisegundos)
const TIEMPO_ENTRE_PETALOS = 5000; 

// Posición de la luz (corresponde con el CSS)
const LIGHT_POSITION = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.3
};

// Definir límites del cilindro para mantener pétalos dentro
const CYLINDER = {
    centerX: window.innerWidth / 2,
    centerY: window.innerHeight * 0.5 + 100, // Ajustar según posición del cristal
    radius: 120, // Radio del cilindro en píxeles
    bottom: window.innerHeight * 0.9 // Suelo del cilindro
};

// Datos de los pétalos con sus propiedades
const PETAL_DATA = [
    { path: "1.svg", x_relative: -35, y_relative: -140, width: 95, height: 100 },
    { path: "2.svg", x_relative: 40, y_relative: -125, width: 110, height: 130 },
    { path: "3.svg", x_relative: -30, y_relative: -132, width: 110, height: 155 },
    { path: "4.svg", x_relative: 56, y_relative: -81, width: 89, height: 110 },
    { path: "5.svg", x_relative: 0, y_relative: -140, width: 85, height: 120 },
    { path: "6.svg", x_relative: 15, y_relative: -140, width: 102, height: 140 },
    { path: "7.svg", x_relative: 15, y_relative: -160, width: 110, height: 170 },
    { path: "8.svg", x_relative: 0, y_relative: -130, width: 132, height: 150 }
];

// Posición base para todos los pétalos
const POSITION_BASE = {
    x: -55,
    y: 0
};