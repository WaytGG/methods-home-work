/* Реализовать функцию конструктор MyArray.

Реализовать следующие статические методы функции конструктора:
MyArray.isMyArray(arg); // подсказка: instanceof

Реализовать ПРОТОТИП для создаваемых коллекций, со следующими методами:
+  MyArray.prototype.includes();
+  MyArray.prototype.indexOf();
  MyArray.prototype.slice();
+  MyArray.prototype.push();
+  MyArray.prototype.pop();

+  MyArray.prototype.concat();

+  MyArray.prototype.unshift();
+  MyArray.prototype.shift();

  // advanced
  MyArray.prototype.reverse();
  MyArray.prototype.forEach();
  MyArray.prototype.map();
  MyArray.prototype.splice() */

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return true;
      }
    }
    return false;
  },

  indexOf: function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  },

  slice: function (begin, end) {},

  push: function (...item) {
    for (let i = 0; i < item.length; i++) {
      this.array[this.length] = item[i];
      this.length++;
    }
    return this.length;
  },

  pop: function (element) {
    for (let i = 0; i < this.length; i++) {
      if (element === "") return undefined;
      this.array = element[element.length - 1];
      delete element[element.length - 1];
    }
    return this.array;
  },

  concat: function (item) {},

  unshift: function (...element) {
    return this.length;
  },

  shift: function () {
    let arrShift = this.array[0];
    for (let i = 1; i < this.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    this.length--;
    return arrShift;
  },
};

// constructor func
function MyArray() {
  this.array = {};
  this.length = 0;
}

// bind prototype obj (Class.prototype)
MyArray.prototype = Object.assign(MyArray.prototype, arrayPrototype);

// static method (Class.method)
MyArray.isMyArray = (arg) => {
  if (arg instanceof MyArray) {
    return true;
  }
  return false;
};

// create instance (new)
const myarray = new MyArray();

myarray.array[0] = 4;
myarray.length = 1;
/////////////////////////////////////////////////////////////////////

//includes
// const result = myarray.includes(4)
// console.log(result);

//indexOf
// const funcIndex = myarray.indexOf(4);
// console.log(funcIndex);

//push
// const funcPush = myarray.push(1, 2, 3, 4, 5);
// console.log(funcPush);

//pop
// const popNum = [10, 9, 8];
// const funcPop = myarray.pop(popNum);
// console.log(funcPop);

//concat
// const funcConcat = myarray.concat(1);
// myarray.concat(2);
// console.log(funcConcat);

//unshift
const funcUnshift = myarray.unshift(1, 2, 3);
console.log(funcUnshift);

//shift
// const funcShift = myarray.shift();
// console.log(funcShift);
