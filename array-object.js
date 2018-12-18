'use strict'

const co = require('co')

// generator function cannot handle 2000000, most likely added overhead of calling co to yield promise
const values = [500, 10000, 50000, 100000, 250000, 1000000]

function arrayCompare() {


  // iterate through different sizes
  for (let valIdx = 0; valIdx < values.length; valIdx++) {

    let arrayOne = []
    let arrayTwo = []
    let arrayThree = []
    let arrayFour = []

    for (let i = 0; i < values[valIdx]; i++) {
      arrayOne.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayTwo.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayThree.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayFour.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
    }

    const start1 = new Date()
    for(let i = 0; i < arrayOne.length; i++) {
      arrayOne[i].key3.inner1 = "bananas"
    }
    const end1 = new Date()
    // clear
    arrayOne = null


    const start2 = new Date()
    for(let obj in arrayTwo) {
      arrayTwo[obj].key3.inner1 = "bananas"
    }
    const end2 = new Date()
    // clear
    arrayTwo = null


    const start3 = new Date()
    arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
    const end3 = new Date()
    // clear
    arrayThree = null


    const start4 = new Date()
    arrayFour = arrayFour.map(obj => obj.key3.inner1 = "bananas")
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
      arrayOne.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayTwo.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayThree.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
      arrayFour.push({
        key1: "string1",
        key2: 22,
        key3: {
          inner1: "string",
          inner2: "value"
        }
      })
    }

    const start1 = new Date()
    for(let i = 0; i < arrayOne.length; i++) {
      arrayOne[i].key3.inner1 = "bananas"
    }
    const end1 = new Date()
    // clear
    arrayOne = null


    const start2 = new Date()
    for(let obj in arrayTwo) {
      arrayTwo[obj].key3.inner1 = "bananas"
    }
    const end2 = new Date()
    // clear
    arrayTwo = null


    const start3 = new Date()
    arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
    const end3 = new Date()
    // clear
    arrayThree = null


    const start4 = new Date()
    arrayFour = yield arrayFour.map(function* (obj) { obj.key3.inner1 = "bananas" })
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
 * run the functions
 */

arrayCompare()
console.log("\n")

co(function* () { yield arrayCompareGenerator() })
console.log("\n")


