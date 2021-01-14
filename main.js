'use strict'

const hourElement = document.querySelector('.time__hour');
const minuteElement = document.querySelector('.time__minute');
const secondElement = document.querySelector('.time__second');

let date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

if(hour >= 0 && hour <= 9) hour = '0' + hour;
if(minute >= 0 && minute <= 9) minute = '0' + minute;
if(second >= 0 && second <= 9) second = '0' + hour;

hourElement.innerHTML = hour;
minuteElement.innerHTML = minute;
secondElement.innerHTML = second;