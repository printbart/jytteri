export function monthToString(month){
    let monthString = "";
    if(month === 0){
        monthString = "January"
    }
    if(month === 1){
        monthString = "February"
    }
    if(month === 2){
        monthString = "March"
    }
    if(month === 3){
        monthString = "April"
    }
    if(month === 4){
        monthString = "May"
    }
    if(month === 5){
        monthString = "June"
    }
    if(month === 6){
        monthString = "July"
    }
    if(month === 7){
        monthString = "August"
    }
    if(month === 8){
        monthString = "September"
    }
    if(month === 9){
        monthString = "October"
    }
    if(month === 10){
        monthString = "November"
    }
    if(month === 11){
        monthString = "December"
    }
    return monthString;
}