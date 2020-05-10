export function minuteToString(minute){
    if(minute < 10){
        minute = "0" + minute;
    }
    return minute
}