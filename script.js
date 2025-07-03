// Fleisch-Zähler Animation
function updateMeatCounter() {
    const counter = document.getElementById('meatCounter');
    let current = parseInt(counter.innerText.replace('.', ''));
    const increment = Math.floor(Math.random() * 10) + 1;
    current += increment;
    
    counter.innerText = current.toLocaleString('de-DE');
    setTimeout(updateMeatCounter, 3000);
}

// Diagramme für Wissenschafts-Sektion
function createCharts() {
    // Bräunungsgrad-Diagramm
    const browningChart = document.getElementById('browningChart');
    browningChart.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const bar = document.createElement('div');
        bar.style.height = `${40 + i*30}px`;
        bar.style.width = '40px';
        bar.style.background = `rgb(${70 + i*20}, ${40 + i*10}, ${10})`;
        bar.style.position = 'absolute';
        bar.style.bottom = '0';
        bar.style.left = `${60 + i*50}px`;
        browningChart.appendChild(bar);
    }
    
    // Saftigkeits-Diagramm
    const juiceChart = document.getElementById('juicinessChart');
    juiceChart.innerHTML = '';
    const juices = [30, 80, 60, 90, 40];
    juices.forEach((height, i) => {
        const bar = document.createElement('div');
        bar.style.height = `${height}px`;
        bar.style.width = '30px';
        bar.style.background = `linear-gradient(to top, #8B4513, #CD853F)`;
        bar.style.position = 'absolute';
        bar.style.bottom = '0';
        bar.style.left = `${50 + i*60}px`;
        juiceChart.appendChild(bar);
    });
}

// Frikadellen-Konfigurator
function setupConfigurator() {
    const browningSlider = document.getElementById('browningSlider');
    const browningLabel = document.getElementById('browningLabel');
    const frikadelle = document.getElementById('frikadelle');
    const sideSelect = document.getElementById('sideSelect');
    const sidesDisplay = document.getElementById('sides');
    
    const browningLevels = [
        "Fast roh",
        "Rosa",
        "Goldbraun",
        "Knusprig",
        "Verkohlt wie Omas Rost"
    ];
    
    browningSlider.addEventListener('input', () => {
        const value = parseInt(browningSlider.value);
        browningLabel.textContent = browningLevels[value - 1];
        
        // Farbe der Frikadelle ändern
        const brownValue = 100 - (value * 15);
        frikadelle.style.background = `rgb(${90 + value*10}, ${brownValue/2}, ${brownValue/4})`;
        
        // Textur-Effekt
        frikadelle.style.boxShadow = `0 ${5+value*2}px ${10+value*3}px rgba(0,0,0,0.${20+value*10})`;
    });
    
    sideSelect.addEventListener('change', () => {
        sidesDisplay.textContent = `+ ${sideSelect.value}`;
    });
}

// Scroll zu Sektion
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Initialisierung beim Laden
document.addEventListener('DOMContentLoaded', () => {
    updateMeatCounter();
    createCharts();
    setupConfigurator();
});