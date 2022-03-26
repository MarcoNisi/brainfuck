import { validateInput, run } from './lib.js'

window.onload = () => {
  const codeInput = document.getElementById('codeInput') as HTMLInputElement
  const runButton = document.getElementById('run') as HTMLButtonElement
  const resultArea = document.getElementById('result') as HTMLInputElement
  const errorText = document.getElementById('error') as HTMLSpanElement
  codeInput.onkeyup = () => {
    const value = codeInput.value
    if (validateInput(value)) {
      codeInput.classList.remove('invalid')
      runButton.disabled = false
      errorText.classList.add('hidden')
    } else {
      codeInput.classList.add('invalid')
      runButton.disabled = true
      errorText.classList.remove('hidden')
    }
  }
  runButton.onclick = () => {
    const value = codeInput.value
    const result = run(value)
    resultArea.textContent = result
  }
}