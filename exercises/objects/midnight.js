/*
  IN: minutes (pos or neg)  
  OUT: formatted time
  EX: 0 => '00:00'
      25 => '00:25'
      3000 => '02:00'
      800 => '13:20'
  DATA: date object
  ALGO:
    get positive minutes
      if negative, minutes = minutes per day - minutes
    separate hours and minutes
    set functions to update
    get with formatting


 */
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaminutes) {
  time = new Date(0);
  if (deltaminutes < 0) deltaminutes = MINUTES_PER_DAY + deltaminutes;
  deltahours = Math.floor(deltaminutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
  deltaminutes = deltaminutes % MINUTES_PER_HOUR;
  time.setHours(deltahours, deltaminutes);

  console.log(`${formatTime(time.getHours())}:${formatTime(time.getMinutes())}`);

  function formatTime(n) {
    return n.toString().padStart(2, '0');
  }
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"