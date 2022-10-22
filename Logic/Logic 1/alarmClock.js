function alarmClock(day, vacation){
  if (day > 0 && day < 6 && !vacation) {
    return '7:00';
  } if (day === 6 && !vacation || day === 0 && !vacation || vacation  && day > 0 && day < 6) {
    return '10:00';
  } else {
    return 'off';
  }
}