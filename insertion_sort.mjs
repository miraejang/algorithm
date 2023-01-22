function InsertionSort(arr) {
  // 정렬되지 않은 영역
  for (let i = 1; i < arr.length; i++) {
    // 정렬되지 않은 영역에서의 첫번째 값
    let insertionData = arr[i];

    // 정렬된 영역
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertionData) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = insertionData;
  }
}

let arr = [4, 1, 5, 3, 6, 2];

console.log("===== 정렬 전 =====");
console.log(arr);

InsertionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
