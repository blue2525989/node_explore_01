'use strict'

const got = require('got')

async function getCall(url) {
  try {
    const response = await got(url)
    console.log(response)
  } catch (error) {
    console.log(error.response)
  }
}

// call it
getCall('http://www.google.com')
console.log("\n")



