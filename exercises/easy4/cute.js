function dms(angle) {
  let hours = Math.floor(angle);
  let minutes = Math.floor((angle - hours) * 60);
  let seconds = Math.floor((((angle - hours) * 60) - minutes) * 60);
  console.log(`${hours}°${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"