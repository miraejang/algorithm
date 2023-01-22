// count : 원반의 개수
// from : 원반이 처음 꽂혀 있는 기둥
// to : 원반이 최종적으로 도착할 기둥
// temp : 원반의 이동을 위해 임시적으로 사용되는 기둥
function hanoi(count, from, to, temp) {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

// 원반3개를 A에서 시작하여 C로 옮김
hanoi(5, "A", "C", "B");
