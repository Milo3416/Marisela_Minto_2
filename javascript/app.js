// Espera a que el DOM (la estructura de la página) esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecciona el slogan en el hero
    const slogan = document.querySelector('.hero-slogan');
    
    // Si el slogan existe, añádele una clase para que aparezca
    if (slogan) {
        // Inicialmente oculto por CSS
        slogan.style.opacity = 0;
        slogan.style.transition = 'opacity 1.5s ease';
        
        // Ejecuta el fade-in después de un pequeño retraso
        setTimeout(() => {
            slogan.style.opacity = 1;
        }, 500);
    }
});