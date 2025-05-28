const themeSwitch = document.querySelector('.theme-switch input');

function playLightSweepAnimation() {
    const logoWrapper = document.querySelector('.logo-wrapper');
    logoWrapper.classList.remove('play-sweep');

    // Forzar un reflow para reiniciar la animación
    void logoWrapper.offsetWidth;

    logoWrapper.classList.add('play-sweep');
}


function switchTheme(e) {
    // Modo oscuro
    if(e.target.checked) {
        document.documentElement.style.setProperty('--color-primary-background', '#182230');
        document.documentElement.style.setProperty('--color-secondary-background', '#000000');
        document.documentElement.style.setProperty('--color-link-nav', '#E5EEFF');
        document.documentElement.style.setProperty('--color-link-nav-hover', '#5C708F');
        document.documentElement.style.setProperty('--color-primary', '#000000');
        document.documentElement.style.setProperty('--color-secondary', '#E5EEFF');
        document.documentElement.style.setProperty('--color-hover-primary', '#333333');
        document.documentElement.style.setProperty('--color-hover-secondary', '#1d284d');
        document.documentElement.style.setProperty('--color-tertiary', '#364254');
        document.documentElement.style.setProperty('--color-description', '#364254');
    } 
    // Modo claro
    else {
        document.documentElement.style.setProperty('--color-primary-background', '#E5EEFF');
        document.documentElement.style.setProperty('--color-secondary-background', '#000000');
        document.documentElement.style.setProperty('--color-link-nav', '#E5EEFF');
        document.documentElement.style.setProperty('--color-link-nav-hover', '#5C708F');
        document.documentElement.style.setProperty('--color-primary', '#E5EEFF');
        document.documentElement.style.setProperty('--color-secondary', '#000000');
        document.documentElement.style.setProperty('--color-hover-primary', '#dddddd');
        document.documentElement.style.setProperty('--color-hover-secondary', '#1d284d');
        document.documentElement.style.setProperty('--color-tertiary', '#364254');
        document.documentElement.style.setProperty('--color-description', '#5C708F');
    }
    
    localStorage.setItem('darkMode', e.target.checked);
    playLightSweepAnimation();
}

themeSwitch.addEventListener('change', switchTheme);

function loadTheme() {
    const darkModeSaved = localStorage.getItem('darkMode');
    
    const darkMode = darkModeSaved === null ? true : darkModeSaved === 'true';
    
    themeSwitch.checked = darkMode;
    
    const event = new Event('change');
    themeSwitch.dispatchEvent(event);
}
document.addEventListener('DOMContentLoaded', loadTheme);