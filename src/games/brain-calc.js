import { gameRule } from '../index.js'
import { generateNum } from '../utils/random.js'

const symbolsOfMathematicalOperations = ['*', '+', '-']

const description = `What is the result of the expression?`

const gameData = () => {
  const num1 = generateNum(1, 10)
  const num2 = generateNum(1, 10)
  let correctAnswer = ''
  const operation = symbolsOfMathematicalOperations[Math.floor(Math.random() * (symbolsOfMathematicalOperations.length))]
  const question = `${num1} ${operation} ${num2}`
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
  }
  return [question, String(correctAnswer)]
}

export default () => {
  gameRule(description, gameData)
}
