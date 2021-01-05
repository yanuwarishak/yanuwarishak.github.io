function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(left + right / 2);
  while (arr[middle] !== n) {
    if (arr[middle] > n) {
      right = middle - 1;
    }
    if (arr[middle] < n) {
      left = middle + 1;
    }
    middle = Math.floor(left + right / 2);
    if (middle === right && middle === left) {
      return -1;
    }
  }
  return middle;
}
