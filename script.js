const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Check if the user prefers dark mode through their OS/browser settings
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    body.classList.add('dark-mode');
}
