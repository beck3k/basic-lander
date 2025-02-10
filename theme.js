const themes = [
    'https://unpkg.com/7.css',
    'https://unpkg.com/xp.css',
    'https://unpkg.com/98.css',
];

const sounds = [
    'win98.mp3',  // Windows 98 logoff sound
    'win7.mp3',  // Windows 7 logoff sound
    'winxp.mp3', // Windows XP logoff sound
];

let currentThemeIndex = 0;
const themeLink = document.getElementById('theme-css');
const themeSwitcher = document.getElementById('close-button');

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function switchTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    themeLink.href = themes[currentThemeIndex];
    playSound(sounds[currentThemeIndex]);
}

themeSwitcher.addEventListener('click', switchTheme); 