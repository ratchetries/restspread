function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //refactor into es2015 :

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

  //wite function called findMin

  const findMin = (...args) => Math.min(...args)

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

//write function called mergeObjects

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//write function called doubleAndReturnArgs

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const removeRandom = items => {
        let idx = Math.floor(Math.random() * items.length);
        return [...items.slice(0, idx), ...items.slice(idx + 1)];
      }

}



/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    const extend = (array1, array2) => {
        return [...array1, ...array2];
      }

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const addKeyVal = (obj, key, val) => {
        let newObj = { ...obj }
        newObj[key] = val;
        return newObj;
    }
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const removeKey = (obj, key) => {
        let newObj = { ...obj }
        delete newObj[key]
        return newObj;
    }
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    const combine = (obj1, obj2) => {
        return { ...obj1, ...obj2 };
    }
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const update = (obj, key, val) => {
        let newObj = { ...obj }
        newObj[key] = val;
        return newObj;
    }
}