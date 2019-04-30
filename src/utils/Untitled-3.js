function CreateObject (father, son) {
  const proto = Object.create(father.prototype)
  proto.constructor = son
  son.prototype = proto
  // son.prototype = father.prototype
}

const Father = function () {}
Father.prototype = {
  whoami () {
    console.log('Father')
  }
}

const Son = function () {}

CreateObject(Father, Son)
const father = new Father()
const son = new Son()

console.log(son.constructor)
console.log(father.constructor)

Son.prototype = {
  whoami () {
    console.log('Son')
  }
}
const son1 = new Son()

console.log(son.constructor)
