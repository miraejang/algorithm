function strLength(str) {
  if (str === "") return 0;
  return strLength(str.slice(0, -1)) + 1;
}

const length = strLength("apple");
console.log(length);
