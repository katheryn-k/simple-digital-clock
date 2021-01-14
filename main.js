'use strict'

const hourElement = document.querySelector('.time__hour');
const minuteElement = document.querySelector('.time__minute');
const secondElement = document.querySelector('.time__second');

let dateObj = new Date();

let hour = dateObj.getHours();
let minute = dateObj.getMinutes();
let second = dateObj.getSeconds();

if(hour >= 0 && hour <= 9) hour = '0' + hour;
if(minute >= 0 && minute <= 9) minute = '0' + minute;
if(second >= 0 && second <= 9) second = '0' + hour;

hourElement.innerHTML = hour;
minuteElement.innerHTML = minute;
secondElement.innerHTML = second;

const dateElement = document.querySelector('.date');
const dayElement = document.querySelector('.day');

let date = dateObj.getDate();
let month = dateObj.getMonth();
let year = dateObj.getFullYear();


if(date >= 0 && date <= 9) date = '0' + date;
if(month === 0) month += 1;
if (month >= 1 && month <= 9) month = '0' + month;
if(year >= 0 && year <= 9) year = '0' + year;

dateElement.innerHTML = `${date}/${month}/${year}`;
