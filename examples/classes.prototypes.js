/**
 * Until Classes were added in ES6, the standard approach to
 * OOP JavaScript was to use prototype inheritance and an
 * object constructor function.
 */

function Person(fullName) {

  /**
   * This is a private method, it is only available
   * within the scope of the function.
   *
   * Notice it is using a closure (name)
   */
  function getName() {
    const nameParts = fullName.split(' ')
    const first = nameParts[0]
    const last = nameParts.splice(1).join(' ')
    return { first, last }
  }

  const name = getName()

  /**
   * These are properties and are available on any
   * instance of the class.
   */
  this.firstName = name.first
  this.lastName = name.last
}

/**
 * This is an instance method and it is available on
 * any instance of the class and has access to the
 * context of the instance (e.g. the "this" of the instance)
 */
Person.prototype.sayHello = function (message) {
  console.log(`Hello ${this.firstName}!`)
}

/**
 * Class method
 */
Person.soemthing = function () {
  console.log('something')
}

Person.something()
//=> 'something'


// Instance
const john = new Person('John H. Smith')

console.log(john.firstName)
console.log(john.lastName)

john.sayHello()


function Pirate(name) {
  // Call the parent, passing in any arguments
  Person.call(this, name)
  this.hasScurvy = true
}

// This is the magic that is used to extend from
// the parent class.
Pirate.prototype = Object.create(Person.prototype)

Pirate.prototype.sayHello = function (message) {
  console.log(`Ahoy ${this.firstName}!!!`)
}

const longJohn = new Pirate('Long John Silver')

console.log(longJohn.firstName)
longJohn.sayHello()
console.log('has scurvy:', longJohn.hasScurvy)
