import { generateNum, gameRule } from '../index.js'

const description = `Find the greatest common divisor of given numbers.`

const findGcd = () => {
  let num1 = generateNum(1, 50)
  let num2 = generateNum(1, 50)
  const question = `${num1} ${num2}`
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return [question, String(num1)]
}

export default () => {
  gameRule(description, findGcd)
}
