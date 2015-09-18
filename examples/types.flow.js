/* @flow */
/**
 * Type checking using Facebook Flow.
 *
 * Make sure to first install Flow (http://flowtype.org); `brew intall flow`
 */

type Person = {
  name: string;
  age: number;
  alive: boolean;
}

function person(name, age: number, alive = true): Person {
  return {
    name,
    age,
    alive,
  }
}

var john= person('John', 23)
