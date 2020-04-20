import React from 'react';

export const extractCategories = (arr) => {
  return arr.map((kat) => {
      return kat.title
  });
}

export const extractHours = (arr) => {
  const res = {
    times: [],
    is_open_now: arr[0].is_open_now,
  }
  
  res.times = arr[0].open.map((t) => {
    let M = 'AM';
    let OM = 'PM';

    let startH = parseInt(t.start.slice(0, 2));
    let startM = t.start.slice(2);
    if (startH > 12) { M = 'PM'; OM = 'AM' }

    let endH = parseInt(t.end.slice(0, 2));
    let endM = t.end.slice(2);
    if (endH > 12) endH -= 12;
    else if (M === 'PM') { OM = M }

    return (
      <p key={dayTable[t.day]}>
        {`${dayTable[t.day]}: ${startH}:${startM}${M} to ${endH}:${endM}${OM}`}
      </p>
    );
  });

  return res;
}

export const extractPhotos = (arr) => {
  return null;
}

const dayTable = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}
