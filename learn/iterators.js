function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let iterationCount = 0

  const rangeIterator = {
    next: function() {
      let result
      if (nextIndex < end) {
        result = { value: nextIndex, done: false }
        nextIndex += step
        iterationCount++
        return result
      }
      return { value: iterationCount, done: true }
    },
  }
  return rangeIterator
}

const it = makeRangeIterator(1, 10, 2)
it.forEach(r => console.log(r))


let result = it.next()
while (!result.done) {
  console.log(result.value) // 1 3 5 7 9
  result = it.next()
}


// [5 numbers returned, that took interval in between: 0 to 10]
console.log('Iterated over sequence of size: ', result.value)

