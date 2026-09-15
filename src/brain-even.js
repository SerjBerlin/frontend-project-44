import readlineSync from 'readline-sync'

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

const generateNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

const evenOrNotGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  let i = 0
  while (i <= 2) {
    const num = generateNum(1, 100)
    const correctAnswer = evenOrNot(num)
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')
    if (correctAnswer === answer) {
      console.log('Correct!')
    }
    else {
      console.log (`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    i += 1
  }
  console.log(`Congratulations, ${name}!`)
}

export default evenOrNotGame
