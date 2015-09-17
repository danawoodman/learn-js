/**
 * Declaring foo outside of the scope of the sayHi
 * function allows the function to still access the
 * variable within its "scope"
 *
 * A closure is a special kind of object that combines a
 * function and the environment in which that function
 * was created.
 */
var foo = 'bar'

function sayHi() {
  console.log('Hello', foo)
}

sayHi()
//=> "Hello bar"
