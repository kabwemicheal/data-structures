const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr2.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

const sameBestApproach = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let fCounter1 = {};
  let fCounter2 = {};
  for (let val of arr1) {
    val in fCounter1 ? (fCounter1[val] += 1) : (fCounter1[val] = 1);
  }

  for (let val of arr2) {
    val in fCounter2 ? (fCounter2[val] += 1) : (fCounter2[val] = 1);
  }

  for (key in fCounter1) {
    if (!(key ** 2 in fCounter2)) return false;
    if (fCounter2[key ** 2] !== fCounter1[key]) return false;
  }
  return true;
};

sameBestApproach([1, 2, 3], [1, 9, 4]);

const uniqueValues = (arr) => {
  return new Set(arr).size;
};

const naiveUniqueValues = (arr) => {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }

  arr.splice(left + 1);

  return arr.length;
};

// function countUniqueValues(arr){
//   // add whatever parameters you deem necessary - good luck!
//    let arr2 = [];
//    for(let i = 0; i < arr.length; i++){
//        let p1 = i;
//        let p2 = i + 1;
//        if(arr[p1] !== arr[p2]){
//            arr2.push(arr[p1]);
//        }
//        else{
//            p1++;
//        }
//    }
//    return arr2.length;

// }

naiveUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

const maxSubArray = (arr, num) => {
  let i = 0;
  let currentSum = 0;
  let prevSum = 0;
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }

  prevSum = currentSum;

  for (let j = num; j < arr.length; j++) {
    prevSum = prevSum - arr[j - num] + arr[j];
    currentSum = Math.max(currentSum, prevSum);
  }

  return currentSum;
};

maxSubArray([1, 2, 5, 2, 8, 1, 5], 4);

const longestStringWithDistinctValue = (arr) => {
  return arr;
};

let result = [];
const collectOddValues = (num) => {
  if (num === 0) return result;
  if (num % 2 !== 0) {
    result.push(num);
  }
  return collectOddValues(num - 1);
};

collectOddValues(10);

const reverseString = (str) => {
  if (str.length === 1) return str;
  return reverseString(str.slice(1)).concat(str[0]);
};

reverseString("Micheal");

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

isPalindrome("");

const isPalindromeRecursive = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[-1];
  if (str[0] === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));
  return false;
};
isPalindromeRecursive("amanaplanacanalpanama");

const someRec = (arr, fn) => {
  if (arr.length === 0) return false;
  if (fn(arr[0])) return true;
  return someRec(arr.slice(1), fn);
};

const isOdd = (val) => val % 2 !== 0;

someRec([2, 4, 6, 8, 7], isOdd);

const flatten = (arr) => {
  return arr.flat(Infinity);
};

flatten([1, 2, 3, 4, [[1, 2, 3]]]);

const capitalizeFirst = (arr) => {
  if (arr.length === 1) return;
  arr[0][0].toUpperCase().concat(arr[0].slice(1));
  return capitalizeFirst(arr.slice(1));
};

capitalizeFirst(["car", "moto", "amanaplanacanalpanama"]);

const linearSearch = (arr, val) => {
  return arr.includes(val) ? arr.indexOf(val) : -1;
};

linearSearch([80], 80);

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  let currentElement = Math.floor((min + max) / 2);

  while (arr[currentElement] !== val && min <= max) {
    if (val > arr[currentElement]) {
      min = currentElement + 1;
    } else {
      max = currentElement - 1;
    }
    currentElement = Math.floor((min + max) / 2);
  }
  return arr[currentElement] === val ? currentElement : -1;
}
binarySearch([1, 2, 3, 4, 5], 4);

const stringSearch = (str, pattern) => {
  let count = 0;
  if (str.indexOf(pattern)) {
    count++;
  }
  return count > 0 ? count : "not found";
};

stringSearch("michealokseal", "eal");

const valleyCount = (steps, path) => {
  const pattern = /(D)\1+/g;
  let count = steps.match(pattern);
  return count;
};

valleyCount("UDUUUDUDDD", 8);

const reverseWords = (str) => {
  let newStr = str.split(" ");
  let length = newStr.length;
  let data = [];

  for (let i = 0; i < length; i++) {
    data.push(newStr.pop());
  }
  return data.join(" ");
};

reverseWords("Knowledge center youtube");

function getTotalX(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  console.log(arr1);
  console.log(arr2);
  pO = {};
  for (let i = arr1[0]; i <= arr2[0]; i++) {
    for (let val of arr1) {
      if (i % val === 0) {
        i in pO ? (pO[i] += 1) : (pO[i] = 1);
      }
    }
  }
  console.log(pO);
  let newPo = [];
  for (let key in pO) {
    if (pO[key] >= 2) {
      newPo.push(Number(key));
    }
  }
  console.log(newPo);
  let arr2Po = {};

  for (let val of arr2) {
    for (let i of newPo) {
      if (val % i === 0) {
        i in arr2Po ? (arr2Po[i] += 1) : (arr2Po[i] = 1);
      }
    }
  }
  let count = 0;
  if (Object.keys(arr2Po).length === 0) {
    count = 1;
  } else {
    for (let key in arr2Po) {
      if (arr2Po[key] >= 2) {
        count++;
      }
    }
  }

  return count;
}

function breakingRecords(scores) {
  // Write your code here
  let max = scores[0];
  let min = scores[0];
  let countMax = 0;
  let countMin = 0;
  for (let score of scores) {
    if (score > max) {
      max = score;
      countMax++;
    }
    if (score < min) {
      min = score;
      countMin++;
    }
  }
  return [countMax, countMin];
}
