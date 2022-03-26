import { validateInput, run } from './lib.js';
window.onload = () => {
    const codeInput = document.getElementById('codeInput');
    const runButton = document.getElementById('run');
    const resultArea = document.getElementById('result');
    const errorText = document.getElementById('error');
    codeInput.onkeyup = () => {
        const value = codeInput.value;
        if (validateInput(value)) {
            codeInput.classList.remove('invalid');
            runButton.disabled = false;
            errorText.classList.add('hidden');
        }
        else {
            codeInput.classList.add('invalid');
            runButton.disabled = true;
            errorText.classList.remove('hidden');
        }
    };
    runButton.onclick = () => {
        const value = codeInput.value;
        const result = run(value);
        resultArea.textContent = result;
    };
};
