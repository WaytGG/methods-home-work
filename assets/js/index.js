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
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      
      if (this.array[i] === arg) {
        return true;
      }
    }
    return false;
  },


  indexOf: function (arg) {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === arg) {
        return i;
      }
    }
    return -1;
  },

  slice: function () {},

  push: function (...element) {
    for(let i = 0; i < element.length; i++){
      this.array = element[i];
    }
    return this.array;
  },
  

  pop: function (element) {
    for(let i = 0; i < this.length; i++) {
      if(element === '') return undefined;
      this.array = element[element.length-1];
        delete element[element.length-1];
        console.log(element);
      }
      return this.array;
  },


  concat: function (element,element2) {
    this.array = [element + ',' + element2];
    return this.array;
  },


  unshift: function (element,element2) {
    this.array = [...element,...element2];
    return this.array;
  },


  shift: function (element) {
    for (let i = 1; i < element.length; i++) {
      if(undefined) return undefined;
      console.log(element.length);
      this.array[i-1] = element[i]
    }
    return this.array;
  },
}




// constructor func
function MyArray() {
  this.array = [];
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

myarray.array[this.length] = 4;
myarray.length = 1;
/////////////////////////////////////////////////////////////////////

//includes
// const result = myarray.includes(4)
// console.log(result);

//indexOf
// const funcIndex = myarray.indexOf(4);
// console.log(funcIndex);

//push
// const pushNum = [1, 2, 3, 4];
// const funcPush = myarray.push(pushNum);
// console.log(funcPush);

//pop
// const popNum = [10, 9, 8];
// const funcPop = myarray.pop(popNum);
// console.log(funcPop);

//concat
// const num1 = ['1', '2', '3', '4', '5'];
// const num2 = ['6', '7', '8', '9', '10'];
// const funcConcat = myarray.concat(num1, num2);
// console.log(funcConcat);

//unshift
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const funcUnshift = myarray.unshift(arr2, arr1);
// console.log(funcUnshift);

//shift
// const arrNumShift = [1, 2, 3, 4, 5];
// const funcShift = myarray.shift(arrNumShift);
// console.log(funcShift);



