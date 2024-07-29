let batteryLevelNumber = 100;
const batteryLevelElement = document.getElementById('batteryLevel');
const clockElement = document.getElementById('clock');
const alarmElement = document.getElementById('alarmTime');

function updateBatteryLevel() {
  batteryLevelNumber--;
  batteryLevelElement.textContent = `배터리 : ${batteryLevelNumber}%`;
  if (batteryLevelNumber <= 0) {
    clockElement.style.backgroundColor = 'black';
    clearInterval(interval);
  }
}

const interval = setInterval(updateBatteryLevel, 1000);
///
function updateclock() {
  var clock = new Date();
  var dateTimeString = clock.toLocaleString();
  document.getElementById("clock").textContent = dateTimeString;
}

setInterval(updateclock, 1000);
///
const alarmView = document.querySelector('.alarm');
const alarmForm = document.getElementById('alarmForm');
const alarmTimeInput = document.getElementById('alarmTime');

let alarmList = [];
let alarmCount = 0;

function addAlarm(time) {
  if(alarmList.includes(time)){ //중복 방지
    return;
  }
  if (alarmCount >= 3) { //3개 초과 방지
    return;
  }

  alarmList.push(time);
  const alarmElement = document.createElement('div');
  alarmElement.textContent = time;
  alarmView.appendChild(alarmElement);

  alarmCount++;
}

alarmForm.addEventListener('submit', function(event) {
  event.preventDefault(); //form 안에 submit 버튼을 눌러도 새로 실행하지 않게
  const alarmTime = alarmTimeInput.value;
  addAlarm(alarmTime);
});
///

