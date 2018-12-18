'use strict'

function arrayCompare1() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 500; i++) {
    const obj = {
      key1: "string1",
      key2: 22,
      key3: {
        inner1: "string",
        inner2: "value"
      }
    }
    arrayOne.push(obj)
    arrayTwo.push(obj)
    arrayThree.push(obj)
    arrayFour.push(obj)
  }

  const start1 = new Date()
  for(let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].key3.inner1 = "bananas"
  }
  const end1 = new Date()


  const start2 = new Date()
  for(let obj in arrayTwo) {
    arrayTwo[obj].key3.inner1 = "bananas"
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(obj => obj.key3.inner1 = "bananas")
  const end4 = new Date()

  console.log("for i loop", end1 - start1)

  console.log("for of loop", end2 - start2)

  console.log("forEach loop", end3 - start3)

  console.log("map loop", end4 - start4)
}

function arrayCompare2() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 50000; i++) {
    const obj = {
      key1: "string1",
      key2: 22,
      key3: {
        inner1: "string",
        inner2: "value"
      }
    }
    arrayOne.push(obj)
    arrayTwo.push(obj)
    arrayThree.push(obj)
    arrayFour.push(obj)
  }

  const start1 = new Date()
  for(let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].key3.inner1 = "bananas"
  }
  const end1 = new Date()


  const start2 = new Date()
  for(let obj in arrayTwo) {
    arrayTwo[obj].key3.inner1 = "bananas"
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(obj => obj.key3.inner1 = "bananas")
  const end4 = new Date()

  console.log("for i loop", end1 - start1)

  console.log("for of loop", end2 - start2)

  console.log("forEach loop", end3 - start3)

  console.log("map loop", end4 - start4)
}

function arrayCompare3() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 100000; i++) {
    const obj = {
      key1: "string1",
      key2: 22,
      key3: {
        inner1: "string",
        inner2: "value"
      }
    }
    arrayOne.push(obj)
    arrayTwo.push(obj)
    arrayThree.push(obj)
    arrayFour.push(obj)
  }

  const start1 = new Date()
  for(let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].key3.inner1 = "bananas"
  }
  const end1 = new Date()


  const start2 = new Date()
  for(let obj in arrayTwo) {
    arrayTwo[obj].key3.inner1 = "bananas"
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(obj => obj.key3.inner1 = "bananas")
  const end4 = new Date()

  console.log("for i loop", end1 - start1)

  console.log("for of loop", end2 - start2)

  console.log("forEach loop", end3 - start3)

  console.log("map loop", end4 - start4)
}

function arrayCompare4() {
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  let arrayFour = []

  for (let i = 0; i < 200000; i++) {
    const obj = {
      key1: "string1",
      key2: 22,
      key3: {
        inner1: "string",
        inner2: "value"
      }
    }
    arrayOne.push(obj)
    arrayTwo.push(obj)
    arrayThree.push(obj)
    arrayFour.push(obj)
  }

  const start1 = new Date()
  for(let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].key3.inner1 = "bananas"
  }
  const end1 = new Date()


  const start2 = new Date()
  for(let obj in arrayTwo) {
    arrayTwo[obj].key3.inner1 = "bananas"
  }
  const end2 = new Date()


  const start3 = new Date()
  arrayThree.forEach( (obj, idx) => { arrayThree[idx].key3.inner1 = "bananas" })
  const end3 = new Date()


  const start4 = new Date()
  arrayFour = arrayFour.map(obj => obj.key3.inner1 = "bananas")
  const end4 = new Date()

  console.log("for i loop", end1 - start1)

  console.log("for of loop", end2 - start2)

  console.log("forEach loop", end3 - start3)

  console.log("map loop", end4 - start4)
}

arrayCompare1()
console.log("\n")
arrayCompare2()
console.log("\n")
arrayCompare3()
console.log("\n")
arrayCompare4()
console.log("\n")


