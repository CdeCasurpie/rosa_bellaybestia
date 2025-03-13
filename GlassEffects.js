/**
 * Funciones para mejorar los efectos visuales del cristal
 */

/**
 * Añade efectos 3D al cristal para mejorar su apariencia
 */
function enhanceGlass() {
    const cristal = document.querySelector('.cristal');
    
    // Crear reflejos dinámicos
    for (let i = 0; i < 5; i++) {
        const reflection = document.createElement('div');
        const size = 10 + Math.random() * 40;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 10;
        
        reflection.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
            top: ${posY}%;
            left: ${posX}%;
            filter: blur(2px);
            opacity: 0.3;
            animation: pulse ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        cristal.appendChild(reflection);
    }
}