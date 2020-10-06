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
   
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    
    const day = weekday[date.getDay()];
    const month = months[date.getMonth()];

    let currentDate = day + " " + dayOfTheMonth + "\n" + month;
    document.getElementById('displayDate').innerText = currentDate;

   
}

showTime();
showDate();
