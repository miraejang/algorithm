function bianrySearch(arr, target, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]) {
    return bianrySearch(arr, target, mid + 1, end);
  } else {
    return bianrySearch(arr, target, start, mid - 1);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = bianrySearch(arr, 3, 0, arr.length - 1);
console.log(`index: ${index}`);
