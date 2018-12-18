'use strict'

function arrayComparePrimativeSmall() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 500; i++) {
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


  const start2 = new Date()
  for(let prim of arrayTwo) {
    prim = false
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (prim, idx) => { arrayThree[idx] = false })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(prim => prim = false)
  const end4 = new Date()

  console.log("for i loop", end1 - start1)
  console.log("for i loop", arrayOne[0])

  console.log("for of loop", end2 - start2)
  console.log("for of loop", arrayTwo[0])

  console.log("forEach loop", end3 - start3)
  console.log("forEach loop", arrayThree[0])

  console.log("map loop", end4 - start4)
  console.log("map loop", arrayFour[0])
}

function arrayComparePrimativeMedium() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 50000; i++) {
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


  const start2 = new Date()
  for(let prim of arrayTwo) {
    prim = false
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (prim, idx) => { arrayThree[idx] = false })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(prim => prim = false)
  const end4 = new Date()

  console.log("for i loop", end1 - start1)
  console.log("for i loop", arrayOne[0])

  console.log("for of loop", end2 - start2)
  console.log("for of loop", arrayTwo[0])

  console.log("forEach loop", end3 - start3)
  console.log("forEach loop", arrayThree[0])

  console.log("map loop", end4 - start4)
  console.log("map loop", arrayFour[0])
}

function arrayComparePrimativeLarge() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 5000000; i++) {
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


  const start2 = new Date()
  for(let prim of arrayTwo) {
    prim = false
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (prim, idx) => { arrayThree[idx] = false })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(prim => prim = false)
  const end4 = new Date()

  console.log("for i loop", end1 - start1)
  console.log("for i loop", arrayOne[0])

  console.log("for of loop", end2 - start2)
  console.log("for of loop", arrayTwo[0])

  console.log("forEach loop", end3 - start3)
  console.log("forEach loop", arrayThree[0])

  console.log("map loop", end4 - start4)
  console.log("map loop", arrayFour[0])
}

function arrayComparePrimativeExtraLarge() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 12500000; i++) {
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


  const start2 = new Date()
  for(let prim of arrayTwo) {
    prim = false
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (prim, idx) => { arrayThree[idx] = false })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(prim => prim = false)
  const end4 = new Date()

  console.log("for i loop", end1 - start1)
  console.log("for i loop", arrayOne[0])

  console.log("for of loop", end2 - start2)
  console.log("for of loop", arrayTwo[0])

  console.log("forEach loop", end3 - start3)
  console.log("forEach loop", arrayThree[0])

  console.log("map loop", end4 - start4)
  console.log("map loop", arrayFour[0])
}

arrayComparePrimativeSmall()
console.log("\n")
arrayComparePrimativeMedium()
console.log("\n")
arrayComparePrimativeLarge()
console.log("\n")
arrayComparePrimativeExtraLarge()
console.log("\n")


