import readlineSync from 'readline-sync'

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
    if (answer !== correctAnswer) {
      console.log (`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
    i += 1
  }
  console.log(`Congratulations, ${name}!`)
}

export { gameRule }
