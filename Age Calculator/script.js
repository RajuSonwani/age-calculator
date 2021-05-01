
function ageCalculate(){
    let inputDate = new Date(document.getElementById("date-input").value);
    var millisecondsDOB = Date.parse(inputDate);
    var millisecondsNow = Date.now();
    var ageInMilliseconds = millisecondsNow-millisecondsDOB;
    
    //for conversion 
    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30; 
    var year = day*365;

    //let the age conversion for round-up(age);
    var years = Math.round(milliseconds/year);
    var months = Math.round(milliseconds/month);
    var days = Math.round(milliseconds/day);
    var hours = Math.round(milliseconds/hour);
    var seconds = Math.round(milliseconds/second);

    // //let the age conversion for fixed(age);
    // var years = milliseconds/year;
    // var months = milliseconds/month;
    // var days = milliseconds/day;
    // var hours = milliseconds/hour;
    // var seconds = milliseconds/second;

    displayResult(years,months,days,hours,seconds);
}

function displayResult(years,months,days,hours,seconds){
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("seconds").textContent = seconds;

}
