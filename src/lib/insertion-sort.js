'use strict';

export default function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let n = i - 1;
    while (n >= 0 && array[n] > temp) {
      array[n + 1] = array[n];
      n -= 1;
    }
    array[n + 1] = temp;
  }
  return array;
}
