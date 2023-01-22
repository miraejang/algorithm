function QuickSort(arr, left, right) {
  if (left <= right) {
    const pivot = divide(arr, left, right);
    QuickSort(arr, left, pivot - 1);
    QuickSort(arr, pivot + 1, right);
  }
}

function divide(arr, left, right) {
  const pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= right && arr[leftStartIndex] <= pivot) {
      leftStartIndex++;
    }

    while (rightStartIndex >= left + 1 && arr[rightStartIndex] >= pivot) {
      rightStartIndex--;
    }

    // leftStartIndex와 rightStartIndex가 멈춘 지점의 값 교환
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  // leftStartIndex와 rightStartIndex가 서로 교차했다면 pivot과 rightStartIndex의 값을 교환
  swap(arr, left, rightStartIndex);
  return rightStartIndex;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

console.log("===== 정렬 전 =====");
console.log(arr);

QuickSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
