function countdown(){
    var today = new Date();
    var myBirthday = new Date('Sat Oct 17 2021 00:00:00 GMT+0530 (India Standard Time)');
    var monthsLeft = Math.floor(myBirthday.getMonth() - today.getMonth());
    var forMonths = Math.round(myBirthday.getDay() - today.getDay());
    console.log(forMonths);
    if (forMonths < 1)
    {
        monthsLeft -=1;
    }
    var totalSeconds = (myBirthday - today)/1000;
    var months = monthsLeft;
    var daysLeft = Math.floor(totalSeconds/3600/24);
    if(forMonths < 1){
        daysLeft = 30 + forMonths;
    }
    var hoursLeft = Math.floor(totalSeconds/3600 % 24);
    var minutesLeft = Math.floor(totalSeconds/60 % 60);
    var secondsLeft = Math.floor(totalSeconds%60);
    document.getElementById('months').innerHTML = monthsLeft;
    document.getElementById('days').innerHTML = daysLeft;
    document.getElementById('hours').innerHTML = hoursLeft;
    document.getElementById('minutes').innerHTML = minutesLeft;
    document.getElementById('seconds').innerHTML = secondsLeft;
}

setInterval(() => {
    countdown()
}, 1000);