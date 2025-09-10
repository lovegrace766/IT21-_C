console.log("My student life in JavaScript");

let name = "Love Grace Margate";
let course = "Bachelor of Science in Informatiom Technology";
let yearlevel = "2nd Year";
let tlhours= "8";
let tlstudy= "2";

console.log ("Name : "+ name + "\nCourse:" + course + "\Year:" + yearlevel+ "\nTotal hours of sleep: "+ hsleep+ "\nTotal hours of study:"+hstudy);

if(tlhours>=5){
    console.log("Great! You studied enough today!");

}else{
    console.log("You need to study more.");
}

let subjects = ["Wev Systems", "Event Diven Programming","OOP", "Networking","Database Management"];
    console.log("\nList of my Subject this sem:");

    for(let i=0; i<subjects.length; i++){
        console.log(subjects[i]);
    }
function studentSummary() {
    return "my name is " + name + ", a" + yearlevel + " from "+ course;

}

// console.log("\n" + studentSummary());