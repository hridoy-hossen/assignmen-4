
function  calculateSleepTime( times ){
    let sum = times[0];
    let hours = 0;
    let minutes = 0;
    let second = 0;
   if(times.every(time => typeof time ==='number')){
       for(let time of times){
        sum = sum + time;
       } 
       let totalHour = sum / 3600;
       hours = Math.floor(totalHour)
       let subMin = totalHour - hours;
       minutes = subMin * 60;
       totalMinutes = Math.floor(minutes);
       second = minutes - totalMinutes;
       second = Math.floor(second * 60);
       const sleepTimes = {}
       sleepTimes.hour = hours;
       sleepTimes.Minute = totalMinutes;
       sleepTimes.second = second;
       return sleepTimes
    }
    else{
        return 'invalid';
    }
} 
