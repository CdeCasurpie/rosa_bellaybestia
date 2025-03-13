/**
 * Script principal que inicializa la animación
 */

// Arreglo para almacenar los controladores de cada pétalo
const petals = [];

/**
 * Crea y coloca todos los pétalos en sus posiciones iniciales
 */
function createPetals() {
    // Crear todos los pétalos en orden inverso para mantener la profundidad visual
    for (let i = PETAL_DATA.length - 1; i >= 0; i--) {
        const petalData = PETAL_DATA[i];
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.id = `petal-${i+1}`;
        
        // Calcular posición inicial
        const topPos = `calc(50vh + ${petalData.y_relative + POSITION_BASE.y}px)`;
        const leftPos = `calc(50vw + ${petalData.x_relative + POSITION_BASE.x}px)`;
        
        petal.setAttribute("style", `
            top: ${topPos}; 
            left: ${leftPos}; 
            width: ${petalData.width}px; 
            height: ${petalData.height}px;
        `);

        const img = document.createElement("img");
        img.src = petalData.path;
        img.alt = `Pétalo ${i+1}`;
        
        // Aplicar filtros de color en lugar de sombras
        img.style.filter = `
            brightness(1.4)
            contrast(1.3)
            saturate(1.2)
        `;
        
        petal.appendChild(img);
        document.body.appendChild(petal);
        
        // Obtener la posición en píxeles para la física
        const rect = petal.getBoundingClientRect();
        
        // Crear el controlador de física para este pétalo
        petals.push({
            element: petal,
            physics: new PetalPhysics(petal, rect.left, rect.top, i),
            index: i+1
        });
    }
}

/**
 * Inicia la secuencia de caída de los pétalos
 */
function startFallingSequence() {
    let currentIndex = 0;
    
    function triggerNextPetal() {
        if (currentIndex < petals.length) {
            // Buscar el pétalo con el índice correcto (1-8)
            const petalToFall = petals.find(p => p.index === currentIndex + 1);
            if (petalToFall) {
                petalToFall.physics.start();
            }
            
            currentIndex++;
            
            // Programar la caída del siguiente pétalo
            if (currentIndex < petals.length) {
                setTimeout(triggerNextPetal, TIEMPO_ENTRE_PETALOS);
            }
        }
    }
    
    // Iniciar la secuencia
    triggerNextPetal();
}

/**
 * Inicializa la aplicación
 */
function init() {
    // Crear pétalos
    createPetals();
    
    // Mejorar el cristal
    enhanceGlass();

    // Iniciar la secuencia después de un breve retraso
    setTimeout(startFallingSequence, 1000);
}

// Cuando el documento esté listo, inicializar la aplicación
document.addEventListener('DOMContentLoaded', init);