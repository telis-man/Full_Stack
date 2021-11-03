let windowSizeOutput = document.createElement('h1');
document.body.appendChild(windowSizeOutput);
function reportWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    windowSizeOutput.textContent = `width: ${width}, height: ${height}`;
}
reportWindowSize();
window.addEventListener('resize', () => reportWindowSize());