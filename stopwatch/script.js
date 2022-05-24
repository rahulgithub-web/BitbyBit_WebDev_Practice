var milsec = 0;
var sec = 0;
var min = 0;

var watchStatus = false;

function startStopwatch() {
    watchStatus = true;
    stopwatch();
}

function stopStopwatch() {
    watchStatus = false;
}

function resetStopwatch() {
    watchStatus = false;
    milsec = 0;
    sec = 0;
    min = 0;
    document.getElementById("mili-sec").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
}

function stopwatch() {
    if(watchStatus == true){
        milsec += 1;
        if(milsec == 100){
            sec += 1;
            milsec = 0;
        }
        if(sec == 60){
            min += 1;
            sec = 0;
        }

        var extra0milsec = milsec;
        var extra0sec = sec;
        var extra0min = min;

        if(milsec < 10){
            extra0milsec = '0' + milsec;
        }
        if(sec < 10){
            extra0sec = '0' + sec;
        }
        if(min < 10){
            extra0min = '0' + min;
        }
        if(milsec == 99 && sec == 99 && min == 99){
            watchStatus == false;
        }
        document.getElementById("mili-sec").innerHTML = extra0milsec;
        document.getElementById("sec").innerHTML = extra0sec;
        document.getElementById("min").innerHTML = extra0min;

        setTimeout("stopwatch()", 10);
    }

}

