import readlineSync from 'readline-sync'

const generateNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

const gameRule = (ruleGame, gameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(ruleGame)
  let i = 0
  while (i <= 2) {
    const [question, correctAnswer] = gameData()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) !== Number(correctAnswer)) {
      console.log (`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
    i += 1
  }
  console.log(`Congratulations, ${name}!`)
}

export { gameRule, generateNum }
