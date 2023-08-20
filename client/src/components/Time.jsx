import React from 'react'
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
const day = weekday[d.getDay()];
const month = months[d.getMonth()]
const year = d.getDate()

const Time = () => {
  return (
    <>
{day}, {month} {year}
    </>
  )
}

export default Time