import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()
const SERVER_PORT = process.env.PORT

app.use(cors())
app.use(express.json())

function isPrime(num) {
  // converts the value of the query param to a number
  // since it's a string
  num = Number(num)
  if (num <= 1) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// a number whose divisors add up to the number
function isPerfect(num) {
  // converts the value of the query param to a number
  // since it's a string
  // for proper comparison of types at the last return
  num = Number(num)
  let sum = 0 // checks for the sum of divisors

  for (let i = 1; i <= num / 2; i++) {
    // if true then i is a divisor of num
    if (num % i === 0) {
      sum += i // adds that divisor ie. i to sum
    } // if the total sum is equal to the number,
    // it's perfect, else it's not
  }

  return num === sum
}

// a number whose sum of, each digit raised to the power of the
// number of digits equals to that number.
function isArmStrong(num) {
  const digits = num.split("") // these creates an array of strings
  const power = num.length

  num = Number(num)
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power)
  }, 0)

  return num === sum
}

//  a number not divisible by 2
function isOdd(num) {
  num = Number(num)

  return num % 2 !== 0
}

//  a number divisible by 2
function isEven(num) {
  num = Number(num)

  return num % 2 === 0
}

function isDigitsSum(num) {
  let sum = 0

  let stringArray = num.split("")
  stringArray.forEach((digit) => {
    sum += Number(digit)
  })

  return sum
}

app.get("/api/classify-number", async (req, res) => {
  try {
    const { number } = req.query

    if (!number) {
      return res.status(400).json({
        number: null,
        error: true,
        // message: "You have not provided any number...",
      })
    }

    if (isNaN(Number(number))) {
      return res.status(400).json({
        number: number,
        error: true,
        // message: "Please provide a valid number...",
      })
    }

    if (Number(number) < 0) {
      return res.status(400).json({
        number: number,
        error: true,
        // message: "Only valid positive numbers are accepted...",
      })
    }

    const armStrong = isArmStrong(number)
    const odd = isOdd(number)
    const even = isEven(number)
    let properties = []

    if (armStrong && odd) {
      properties = ["armstrong", "odd"]
    } else if (armStrong && even) {
      properties = ["armstrong", "even"]
    } else if (odd) {
      properties = ["odd"]
    } else if (even) {
      properties = ["even"]
    }

    const response = await fetch(`http://numbersapi.com/${Number(number)}/math`)
    const funFact = await response.text()

    res.status(200).json({
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: properties,
      digit_sum: isDigitsSum(number),
      fun_fact: funFact,
    })
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error...",
    })
  }
})

// app.listen(SERVER_PORT, () => {
//   console.log(`[server]: App listening on port: ${SERVER_PORT}`)
// })

export default app
