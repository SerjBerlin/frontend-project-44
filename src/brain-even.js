import { generateNum, gameRule } from '../src/index.js'

const evenOrNot = (number) => {
  const num = number % 2 === 0 ? 'even' : 'odd'
  if (num === 'even') {
    const answer = 'yes'
    return answer
  }
  else {
    const answer = 'no'
    return answer
  }
}

const ruleGame = `Answer "yes" if the number is even, otherwise answer "no".`

const gameEven = () => {
  const question = generateNum(1, 50)
  const correctAnswer = evenOrNot(question)
  return [question, correctAnswer]
}

export default () => {
  gameRule(ruleGame, gameEven)
}
