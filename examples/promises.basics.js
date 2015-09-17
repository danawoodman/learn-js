function upload(file) {
  return new Promise((resolve, reject) => {
    // Do something asynchronous here...
    if (file === 'failure') {
      reject(new Error('bad file'))
    }
    resolve('works')
  })
}

// Should succeed and call `then`
upload('somefile.txt')
  .then(console.log)
  .catch(console.error)

// Should fail and call `catch`
upload('failure')
  .then(console.log)
  .catch(console.error)

