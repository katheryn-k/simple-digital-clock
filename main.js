'use strict'
function updateTime() {
    const hourElement = document.querySelector('.time__hour');
    const minuteElement = document.querySelector('.time__minute');
    const secondElement = document.querySelector('.time__second');

    let dateObj = new Date();

    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();

    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + hour;

    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;

    const dateElement = document.querySelector('.date');
    const dayElement = document.querySelector('.day');

    let date = dateObj.getDate();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();


    if(date < 10) date = '0' + date;
    if(month === 0) month += 1;
    if (month < 10) month = '0' + month;
    if(year < 10) year = '0' + year;

    dateElement.innerHTML = `${date}/${month}/${year}`;

    let dayNumber = dateObj.getDay();
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = week[dayNumber];

    dayElement.innerHTML = day;
}

setInterval(updateTime, 1000);

