function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const hourHand = document.querySelector("#hour-hand");
  const minuteHand = document.querySelector("#minute-hand");
  const secondHand = document.querySelector("#second-hand");
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle = minute * 6 + (second / 60) * 6;
  const secondAngle = second * 6;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
setInterval(updateTime, 1000);
