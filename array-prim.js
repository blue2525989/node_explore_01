'use strict'

const co = require('co')


const values = [500, 10000, 50000, 100000, 250000, 1000000]

function arrayCompare() {


  // iterate through different sizes
  for (let valIdx = 0; valIdx < values.length; valIdx++) {

    let arrayOne = []
    let arrayTwo = []
    let arrayThree = []
    let arrayFour = []

    for (let i = 0; i < values[valIdx]; i++) {
      arrayOne.push(true)
      arrayTwo.push(true)
      arrayThree.push(true)
      arrayFour.push(true)
    }

    const start1 = new Date()
    for(let i = 0; i < arrayOne.length; i++) {
      arrayOne[i] = false
    }
    const end1 = new Date()
    // clear
    arrayOne = null


    const start2 = new Date()
    for(let obj in arrayTwo) {
      arrayTwo[obj] = false
    }
    const end2 = new Date()
    // clear
    arrayTwo = null


    const start3 = new Date()
    arrayThree.forEach( (obj, idx) => { arrayThree[idx] = false })
    const end3 = new Date()
    // clear
    arrayThree = null


    const start4 = new Date()
    arrayFour = arrayFour.map(obj => { obj = false; return obj } )
    const end4 = new Date()
    // clear
    arrayFour = null

    console.log(`\n\t*${values[valIdx]}*\n`)

    console.log("for i loop", end1 - start1)

    console.log("for of loop", end2 - start2)

    console.log("forEach loop", end3 - start3)

    console.log("map loop", end4 - start4)

    console.log("\n")

  }


}

function* arrayCompareGenerator() {

  // iterate through different sizes
  for (let valIdx = 0; valIdx < values.length; valIdx++) {

    let arrayOne = []
    let arrayTwo = []
    let arrayThree = []
    let arrayFour = []

    for (let i = 0; i < values[valIdx]; i++) {
      arrayOne.push(true)
      arrayTwo.push(true)
      arrayThree.push(true)
      arrayFour.push(true)
    }

    const start1 = new Date()
    for(let i = 0; i < arrayOne.length; i++) {
      arrayOne[i] = false
    }
    const end1 = new Date()
    // clear
    arrayOne = null


    const start2 = new Date()
    for(let obj in arrayTwo) {
      arrayTwo[obj] = false
    }
    const end2 = new Date()
    // clear
    arrayTwo = null


    const start3 = new Date()
    arrayThree.forEach( (obj, idx) => { arrayThree[idx] = false })
    const end3 = new Date()
    // clear
    arrayThree = null


    const start4 = new Date()
    arrayFour = yield arrayFour.map(function* (obj) { obj = false; return obj })
    const end4 = new Date()
    // clear
    arrayFour = null

    console.log(`\n\t*${values[valIdx]}*\n`)

    console.log("for i loop", end1 - start1)

    console.log("for of loop", end2 - start2)

    console.log("forEach loop", end3 - start3)

    console.log("map loop", end4 - start4)

    console.log("\n")
  }

}

function* arrayCompareGenerator() {

  // iterate through different sizes
  for (let valIdx = 0; valIdx < values.length; valIdx++) {

    let arrayOne = []
    let arrayTwo = []
    let arrayThree = []
    let arrayFour = []

    for (let i = 0; i < values[valIdx]; i++) {
      arrayOne.push(true)
      arrayTwo.push(true)
      arrayThree.push(true)
      arrayFour.push(true)
    }

    const start1 = new Date()
    for(let i = 0; i < arrayOne.length; i++) {
      arrayOne[i] = false
    }
    const end1 = new Date()
    // clear
    arrayOne = null


    const start2 = new Date()
    for(let obj in arrayTwo) {
      arrayTwo[obj] = false
    }
    const end2 = new Date()
    // clear
    arrayTwo = null


    const start3 = new Date()
    arrayThree.forEach( (obj, idx) => { arrayThree[idx] = false })
    const end3 = new Date()
    // clear
    arrayThree = null


    const start4 = new Date()
    arrayFour = yield arrayFour.map(function* (obj) { obj = false; return obj })
    const end4 = new Date()
    // clear
    arrayFour = null

    console.log(`\n\t*${values[valIdx]}*\n`)

    console.log("for i loop", end1 - start1)

    console.log("for of loop", end2 - start2)

    console.log("forEach loop", end3 - start3)

    console.log("map loop", end4 - start4)

    console.log("\n")
  }

}

/**
 * run the jewels
 */
arrayCompare()
console.log("\n")

co( function* () { yield arrayCompareGenerator() } )
console.log("\n")


