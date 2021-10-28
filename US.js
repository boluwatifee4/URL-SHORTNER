var hour = new Date().getHours()
let out;
if (hour = 0 && hour < 12) {
    out = 'GOOD MORNING USERNAME'
} else if (hour = 12 && hour <= 16) {
    out = 'GOOD AFTERNOON USERNAME'
} else {
    out = "GOOD EVENING USERNAME"
}
document.getElementById('bold').innerHTML = out;

let dateString = ['sunday', 'monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday']
let day = new Date().getDay();
let dayName;
if (day == 0) {
    dayName = 'Sunday'
} else if (day == 1) {
    dayName = 'Monday'
} else if (day == 2) {
    dayName = 'Tuesday'
} else if (day == 3) {
    dayName = 'Wednesday'
} else if (day == 4) {
    dayName = 'Thursday'
} else if (day == 5) {
    dayName = 'Friday'
} else {
    dayName = 'Saturday'
}
document.getElementById('light').innerHTML = " It's another " + dayName + " to shorten your links"

var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.css = "left: " + e.clientX 
    + "px; top: " + e.clientY + "px; "
});

