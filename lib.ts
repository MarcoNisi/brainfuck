export const validateInput = (str: string) => {
  let openBrackets = 0
  let closedBrackets = 0
  let i = 0
  while (i < str.length) {
    if (str[i] === '[') {
      openBrackets++
    }
    if (str[i] === ']') {
      closedBrackets++
    }
    if (closedBrackets > openBrackets) {
      return false
    }
    i++
  }
  if (closedBrackets !== openBrackets) {
    return false
  }
  return true
}

export const positionAfterCurrentLoop = (input: string, currentIndex: number) => {
  let openBrackets = 0
  let closedBrackets = 0
  for (let i = currentIndex + 1; i < input.length; i++) {
    if (input[i] === '[') {
      openBrackets++
    } else if (input[i] === ']') {
      closedBrackets++
    }
    if (closedBrackets - openBrackets === 1) {
      return i + 1
    }
  }
}

const MAX = 30000

export const run = (input: string) => {
  let array = new Uint8Array(MAX)
  let arrayPtr = 0
  const filteredInput = input.replaceAll(/[^\+\-<>\[\],\.]/g, '')
  const loopIndexes = []
  let result = ''
  for (let inputPtr = 0; inputPtr < filteredInput.length; inputPtr++) {
    switch (filteredInput[inputPtr]) {
      case '+': 
        array[arrayPtr]++
        break
      case '-':
        array[arrayPtr]--
        break
      case '.':
        result += String.fromCharCode(array[arrayPtr])
        break
      case ',':
        const userInput = prompt()
        if (userInput) {
          array[arrayPtr] = userInput[0].charCodeAt(0)
        }
        break
      case '<':
        arrayPtr--
        break
      case '>':
        arrayPtr++
        break
      case '[':
        if (array[arrayPtr] === 0) {
          const nextInputPtrAfterCurrentLoop = positionAfterCurrentLoop(filteredInput, inputPtr)
          if (nextInputPtrAfterCurrentLoop !== undefined) {
            inputPtr = nextInputPtrAfterCurrentLoop
          }
        } else {
          loopIndexes.push(inputPtr)
        }
        break
      case ']':
        if (array[arrayPtr] > 0) {
          const lastLoopIndex = loopIndexes.pop()
          if (lastLoopIndex !== undefined) {
            inputPtr = lastLoopIndex - 1
          }
        }
    }
  }
  return result
}