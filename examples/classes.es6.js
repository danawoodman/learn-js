/**
 * Classes are finally part of JavaScript as of ES6 and
 * are supported by iojs and Node v4.x as well as when
 * transpiling via babel/etc.
 *
 * Note: You must run this file with "node --use_strict"
 */
class Person {
  /**
   * Special constructor function that is called
   * when a new class is instantiated.
   */
  constructor(fullName) {
    const nameParts = fullName.split(' ')

    /**
     * Properties
     */
    this.first = nameParts[0]
    this.last = nameParts.splice(1).join(' ')
  }

  /**
   * Class method
   */
  static walk() {
    console.log('I\'m walking...')
  }

  /**
   * Instance method
   */
  sayHi() {
    console.log(`Hello ${this.first}`)
  }
}

Person.walk()
//=> "I'm walking..."

const john = new Person('John H. Smith')
console.log(john.first)
//=> "John"

john.sayHi()
//=> "Hello John"
