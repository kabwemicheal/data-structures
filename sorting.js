const bubbleSort = (arr) => {
  //works by comparing two adjcents
  //worst case O(n^2)
  //best case O(n)

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j + 1]) {
        temp = arr[i];
        arr[i] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//bubbleSort([8,7,6,5,3,1,3,4,5,6,7,23,3,4,5,66,77,8,1])

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let swap = arr[i];
      arr[i] = arr[min];
      arr[min] = swap;
      console.log(arr);
    }
  }
  return arr;
};

//selectionSort([1,2,3,7,6,5,7])

//const insertionSort = (arr) => {
//   for(let i = 0; i < arr.length; i++){
//       for(let j = i + 1; j < arr.length; j++){
//           if(arr[j] < arr[i]){
//               arr.splice(i, 0, arr[j])
//             console.log(arr)
//          }
//    }
//
//  }
//  return arr
//}

//insertionSort([7,6,5,4,3])

//Merge Sort

const merge = (arr1, arr2) => {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(left, right);
};

mergeSort([8, 5, 78, 1, 2, 3, 9, 90, 45, 23, 76]);

//QuickSort

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let selectedPivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (selectedPivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

quickSort([6, 7, 76, 3, 2, 4]);

//radix sort

const getDigit = (num, pos) => {
  let numIteratable = String(num);
  return Number(numIteratable[numIteratable.length - 1 - pos]);
};

const digitCount = (num) => String(num).length;

const mostDigits = (arr) => {
  let max = 0;
  for (let val of arr) {
    max = Math.max(max, digitCount(val));
  }
  return max;
};

const radixSort = (numsArr) => {
  let maxDigitsCount = mostDigits(numsArr);
  console.log(maxDigitsCount);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numsArr.length; i++) {
      let digit = getDigit(numsArr[i], k);
      digitBucket[digit].push(numsArr[i]);
    }
    numsArr = [].concat(...digitBucket);
  }
  return numsArr;
};

radixSort([1, 123, 45, 6789, 56463, 786]);
