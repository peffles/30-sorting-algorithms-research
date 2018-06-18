const bubbleSort = (arr) => {
  let switched = true;

  while (switched) {
    switched = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        switched = true;
      }
    }
  }

  return arr;
};

export default bubbleSort;
