//switchcase: Used in multiple environments (QA, Dev, UAT, prod)
// Used in multiple user logins (admin, customer, seller, distributor)
function CheckDaysOfTheWeek(dayNumber){
    let day;
    switch(dayNumber){
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break; 
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "saturday";
            break;

        default:
            console.log("Invalid day");
    }
    return day;
}
console.log(CheckDaysOfTheWeek(3));

function CheckBrowser(browserName){
    switch(browserName){
        case "Chrome":
            console.log("Launch Chrome Browser");
            break;
        case "Firefox":
            console.log("Launch Firefox Browser");
            break;
        default:
            console.log("Invalid Browser Name: "+  browserName);
    }
}
CheckBrowser("Chrome");
CheckBrowser("x");