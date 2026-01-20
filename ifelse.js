//if-else:
//CheckAge
function RightToVote(age){
    if(age>=18){
        console.log("Candidate is old enough to vote.");
    }
    else{
        console.log(`Sorry,your age is ${age}. Candidate must be 18 or older to vote.`);
    }
}
RightToVote(20);
RightToVote(10);

//CheckNumber
function CheckNumber(number){
    if(number > 0){
        console.log(`The number ${number} is positive.`)
    }
    else{
        console.log(`The number ${number} is negative.`)
    }
}
CheckNumber(10);
CheckNumber(-10);

//nested if-else:
//CheckGrade
function CheckGrade(score){
    let grade;
    if(score>=90){
        grade='A';
    }
    else{
        if(score>=80){
            grade='B';
        }
        else{
            if (score>=70){
                grade='C';
            }
            else{
                grade='D';
            }
        }
    }
    console.log(grade);
}
CheckGrade(100);
