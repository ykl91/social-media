const modeSelector = document.querySelector('.mode');
const theme = document.querySelector('.dark-light-theme');
let themeDark = true;

eventsListener();

function eventsListener() {
    document.addEventListener('DOMContentLoaded', () => {
        chargeThemeLocalStorage();
    })
    modeSelector.addEventListener('click', changeMode);
}

function changeMode() {
    if (themeDark) {
        theme.href = 'lighttheme.css';
        modeSelector.classList.add('turn-right');
    }
    else {
        theme.href = 'darktheme.css'
        modeSelector.classList.remove('turn-right');
    }
    saveThemeLocalStorage(theme.href);
    themeDark = !themeDark;
}

function saveThemeLocalStorage(theme) {
    localStorage.setItem('themeSocial', theme);
}

function chargeThemeLocalStorage() {
    const themeLS = localStorage.getItem('themeSocial');
    if (themeLS) {
        theme.href = themeLS;
        if (themeLS.includes('light')) {
            themeDark = false;
            modeSelector.classList.add('turn-right');
        };
    }
}