import { generateNum, gameRule } from '../index.js'

const description = `Answer "yes" if given number is prime. Otherwise answer "no".`

const lastCheckOnSimple = (num) => {
  const squareRoot = Math.floor(Math.sqrt(num))
  for (let i = 3; i <= squareRoot; i += 2)
    if (num % i === 0) {
      return 'no'
    }
  return 'yes'
}

const primeNum = () => {
  const question = generateNum (-50, 50)
  if (question < 2) {
    return [question, 'no']
  }
  else if (question === 2) {
    return [question, 'yes']
  }

  if (question % 2 === 0) {
    return [question, 'no']
  }
  else {
    const answer = lastCheckOnSimple(question)
    return [question, answer]
  }
}

export default () => {
  gameRule(description, primeNum)
}
