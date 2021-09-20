function convertToHoursMin (num) {
    var minInHour = 60;
    var decimalHours = num / minInHour;
    var hours = Math.round(decimalHours);
    var decimalMinutes = (decimalHours - hours) * minInHour;
    var minutes = Math.round(decimalMinutes);
    if (hours < 2 ) {
        if (minutes > 1) {
            return hours + " hour, " + minutes + " minutes";
        }
        else {
            return hours + " hour, " + minutes + " minute";
        }
    }
    else {
        if(minutes > 1) {
            return hours + " hours, " + minutes + " minutes";
        }
        else {
            return hours + " hours, " + minutes + " minute";
        }

    }
}

