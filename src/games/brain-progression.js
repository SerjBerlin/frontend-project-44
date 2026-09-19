import { generateNum, gameRule } from '../index.js'

const description = `What number is missing in the progression?`

const randomArr = () => {
  const randomArrLength = generateNum(5, 10)
  const randomStep = generateNum(1, 4)
  const randomStart = generateNum(1, 7)
  let currentNum = randomStart
  const arr = [currentNum]
  for (let i = 1; i < randomArrLength; i += 1) {
    currentNum += randomStep
    arr.push(currentNum)
  }
  return arr
}

const gameData = () => {
  const arr = randomArr()
  const randomIndex = generateNum(0, arr.length - 1)
  const correctAnswer = arr[randomIndex]
  arr.splice(randomIndex, 1, '..')
  const question = arr.join(' ')
  return [question, String(correctAnswer)]
}

export default () => {
  gameRule(description, gameData)
}
