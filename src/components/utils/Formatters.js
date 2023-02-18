export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export function formatTime(duration) {
  if (duration > 3600) {
   return  new Date(duration * 1000)
        .toISOString()
        .split("T")[1]
        .substring(0, 8)
  }
return  new Date(duration * 1000)
        .toISOString()
        .split("T")[1]
        .substring(3, 8)
    
}

export function formatReletiveDate(timestamp) {
  const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
  );
  return rtf.format(daysDifference, 'day');
}

export function formatNumber(number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + "B";
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }
  return number;
}
