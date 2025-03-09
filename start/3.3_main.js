// 화면에 숫자나 연산자를 추가
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// 화면을 초기화
function clearDisplay() {
  document.getElementById('display').value = '';
}

// 계산 결과를 계산하고 화면에 표시
function calculateResult() {
  const display = document.getElementById('display');
  try {
    // 수식 계산
    display.value = eval(display.value);
  } catch (e) {
    // 오류 발생 시 '오류'를 화면에 표시
    display.value = '오류';
  }
}
