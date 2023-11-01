function swapCase(text) {
  return text.split('')
  .map(c => c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase())
  .join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv")