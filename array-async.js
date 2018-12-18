'use strict'

async function arrayCompare() {


  let arrayOne = []

  for (let i = 0; i < 50000000; i++) {
    arrayOne.push(true)
  }

  await arrayOne.forEach(iterator => { iterator = false; console.log(iterator); return iterator})
}

arrayCompare()
