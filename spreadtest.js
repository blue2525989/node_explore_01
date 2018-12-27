'use strict'

function spread(...words) {
  if (!(words.length % 2 === 0)) {
    return 'must be divisible by two to ensure proper key/value building.'
  }
  const response = []
  let tempObj = {}
  let valuePlaced = false
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      tempObj.name = words[i]
    } else {
      tempObj.value = words[i]
      valuePlaced = true
    }
    if (valuePlaced) {
      response.push(tempObj)
      valuePlaced = false
      tempObj = {}
    }
  }
  return response
}

const response = spread('namey', 'valuey', 'meowy', 'kitty', 'woofy', 'doggy')

console.log(response)
