/* Реализовать функцию конструктор MyArray.

Реализовать следующие статические методы функции конструктора:
MyArray.isMyArray(arg); // подсказка: instanceof

Реализовать ПРОТОТИП для создаваемых коллекций, со следующими методами:
MyArray.prototype.includes()+
MyArray.prototype.indexOf()+
MyArray.prototype.slice()
MyArray.prototype.push();
MyArray.prototype.pop(); // tip: delete

MyArray.prototype.concat();

MyArray.prototype.unshift();
MyArray.prototype.shift();

// advanced
MyArray.prototype.reverse();
MyArray.prototype.forEach();
MyArray.prototype.map();
MyArray.prototype.splice() */

// prototype obj
const arrayPrototype = {


  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      
      if (this.array[i] === arg) {
        return true;
      }
    }
    return false;
  },


  indexOf: function () {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === arg) {
        return i;
      }
    }
    return -1;
  },

  slice: function () {},

  push: function () {},
}




// constructor func
function MyArray() {
  this.array = {}
  this.length = 0;
}

// bind prototype obj (Class.prototype)
MyArray.prototype = Object.assign(
  MyArray.prototype, 
  arrayPrototype
);

// static method (Class.method)
MyArray.isMyArray = (arg) => {
  if (arg instanceof MyArray) {
    return true;
  }
  return false;
}



// create instance (new)
const myarray = new MyArray()

myarray.array[this.length] = 4
myarray.length = 1

const result = myarray.includes(5)

console.log(result);


///////////////////////////////////////////////////////////////


