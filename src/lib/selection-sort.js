'use strict';

const selectionSort = (array) => {
  if (!array) {
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let n = i + 1; n < array.length; n++) {
      if (array[n] < array[min]) {
        min = n;
      }
    }
    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

export default selectionSort;
