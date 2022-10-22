/* Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, 
and a boolean indicating if we are on vacation, return a string of the form "7:00" 
indicating when the alarm clock should ring. 
Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off". */

function alarmClock(day, vacation){
  if (day > 0 && day < 6 && !vacation) {
    return '7:00';
  } if (day === 6 && !vacation || day === 0 && !vacation || vacation  && day > 0 && day < 6) {
    return '10:00';
  } else {
    return 'off';
  }
}