function errorColorChange(){
    var inputs = document.querySelectorAll("input");
    var labels = document.querySelectorAll("label");
    var paragraphs = document.querySelectorAll("p");

    inputs.forEach((input)=>(input.style.borderColor = "hsl(0, 100%, 67%)"));
    labels.forEach((label)=>(label.style.color = "hsl(0, 100%, 67%)"));
    paragraphs.forEach((paragraph)=>(paragraph.style.color = "hsl(0, 100%, 67%)"));
}

function dobDaycheck(Day, Month, Year){
    if(Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12){
        if(Day>31){
            return false;
        }else{
            return true;
        }
    }
    if(Month==4 || Month==6 || Month==9 || Month==11){
        if(Day>30){
            return false;
        }else{
            return true;
        }
    }
    if(Month==2){
        if((Year % 4 == 0) && (Year % 100 != 0) || (Year % 400 == 0)){
            if(Day>29){
                return false;
            }else{
                return true;
            }
        }else{
            if(Day>28){
                return false;
            }else{
                return true;
            }
        }
    }
}

function isNotNumeric(n) {
    return isNaN(parseFloat(n)) && isFinite(n);
}  

function calculateAge() {
const dobDay = document.getElementById("day").value;
const dobMonth = document.getElementById("month").value;
const dobYear = document.getElementById("year").value;

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth()+1;
const currentDay = now.getDate()+1;
console.log(now);
console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);

let age_year=0, age_month = 0, age_day = 0;

if(dobDay == "" && dobMonth == "" && dobYear == ""){
    document.getElementById("day-error").innerHTML = "This field is required";
    document.getElementById("month-error").innerHTML = "This field is required";
    document.getElementById("year-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if(dobDay == "" && dobMonth == ""){
    document.getElementById("day-error").innerHTML = "This field is required";
    document.getElementById("month-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if(dobDay == "" && dobYear == ""){
    document.getElementById("day-error").innerHTML = "This field is required";
    document.getElementById("year-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if(dobMonth == "" && dobYear == ""){
    document.getElementById("month-error").innerHTML = "This field is required";
    document.getElementById("year-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if (dobDay == "" || dobDay == null) {
    document.getElementById("day-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if (dobMonth == ""|| dobMonth == null) {
    document.getElementById("month-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if (dobYear == "" ||dobYear == null) {
    document.getElementById("year-error").innerHTML = "This field is required";
    errorColorChange();
    return false;
}
else if(isNotNumeric(dobYear)){
    document.getElementById("year-error").innerHTML = "Must be a valid year";
    errorColorChange();
    return false;
}
else if(isNotNumeric(dobMonth)){
    document.getElementById("month-error").innerHTML = "Must be a valid month";
    errorColorChange();
    return false;
}
else if(isNotNumeric(dobDay)){
    document.getElementById("month-error").innerHTML = "Must be a valid day";
    errorColorChange();
    return false;
}
else if(dobYear > currentYear){
    document.getElementById("year-error").innerHTML = "Must be in the past";
    errorColorChange();
    return false;
}
else if(dobMonth > 12){
    document.getElementById("month-error").innerHTML = "Must be a valid month";
    errorColorChange();
    return false;
}
else if(!dobDaycheck(dobDay, currentMonth, currentYear)){
    document.getElementById("month-error").innerHTML = "Must be a valid day";
    errorColorChange();
    return false;
}
else{
    age_year = currentYear - dobYear;
    if (dobMonth > currentMonth) {
        age_year--;
        age_month = 12 + currentMonth - dobMonth;
    } else {
        age_month = currentMonth - dobMonth;
    }

    if (dobDay > currentDay) {
        age_month--;
        if (age_month < 0) {
            age_month = 11;
            age_year--;
        }
        if (age_month == 2){
            if((Year % 4 == 0) && (Year % 100 != 0) || (Year % 400 == 0)){
                age_day = 29 + currentDay - dobDay;
            }
            else{
                age_day = 28 + currentDay - dobDay;
            }
        }
        else if(age_month==4 || age_month==6 || age_month==9 || age_month==11){
            age_day = 30 + currentDay - dobDay;
        }
        else{
            age_day = 31 + currentDay - dobDay;
        }
    } else {
        age_day = currentDay - dobDay;
    }

    console.log(age_year, age_month, age_day);

    document.getElementById("age_year").innerHTML = age_year;
    document.getElementById("age_month").innerHTML = age_month;
    document.getElementById("age_day").innerHTML = age_day;
    return true;
}
}