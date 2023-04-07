export function parseDate(dateString) {
  const date = new Date(dateString);

  return date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString();    
  }