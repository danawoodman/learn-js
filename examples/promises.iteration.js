function email(message) {
  return new Promise((resolve, reject) => {
    console.log('sending message:', message)
    resolve()
  })
}

Promise.all([
  email('hello'),
  email('world'),
])
  .then(() => console.log('all messages sent!'))

// Also see 'race' in the Promse/A+ spec
// If using a library like Bluebird, also check out "settle", "any", "some", etc
// https://github.com/petkaantonov/bluebird/blob/master/API.md#collections
