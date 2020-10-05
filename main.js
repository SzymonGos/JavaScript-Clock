function showTime(){
    const date  = new Date();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById('displayClock').innerText = time;
    
    setTimeout(showTime, 1000);
};

function showDate(){
    const date = new Date();
    let dayOfTheMonth = date.getDate();  
    
    
    const weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    

    const day = weekday[date.getDay()];
    const month = months[date.getMonth()];

    let currentDate = day + " " + dayOfTheMonth + " " + month;
    document.getElementById('displayDate').innerText = currentDate;

   
}

showTime();
showDate();
