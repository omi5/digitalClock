function digitalClock (){
    const date = new Date();

    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const timeperiod = 'AM';

    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours -12;
        timeperiod = 'PM'
    }

    // hours = hours  < 10 ? '0' + hours : hours;
    // minute = minute  < 10 ? '0' + minute : minute;
    // second = second  < 10 ? '0' + second : second;
    // hours = hours < 10 ? '0' + hours : hours;
    // minute = minute < 10 ? '0' + minute : minute;
    // second= second< 10 ? '0' + second : second;

   let finalTime = `${hours}: ${minute}: ${second}`
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeperiod; 
    
  setInterval(digitalClock,1000);
}

digitalClock();