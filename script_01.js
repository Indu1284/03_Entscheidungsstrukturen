// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Assigment (Wertzuweisung)
ageJohn = 30;
ageMark = 30;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true) 
// if (false) 
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (isJohnOlder) 
// {
//     // Ja-Zweig / true
//     console.log("John ist älter.");
// } 
// else 
// {
//     // Nein-Zweig / false
//     console.log("John ist jünger.");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter,jünger,gleich alt)

if (isJohnOlder) 
// Ja-Zweig / true
{
    console.log("John ist älter.");
}
// 1. Alternative
else if(isJohnEqual)
{
    console.log("John ist gleich alt.");
}
// ggf. weitere Alternativen ..

// Nein-Zweig / false
else 
{
    console.log("John ist jünger.");
}


/****** Fallunterscheidung / CASE|SWITCH 1 ******/

const firstName = "Jane";
let job;
job = "driver";  // .. fährt TAXI!
job = "diver"; // .. taucht im Rhein!
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes!

job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

// switch (job) 
// {
//     case "driver": //1. Fall (case)
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver": //2. Fall (case)
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist": //3. Fall (case)
//         console.log(firstName + " malt ein Bild!");
//         break;
//     case "teacher": //4. Fall (case)
//     case "instructor": //4a. Fall (case)
//         console.log(firstName + " unterrichtet!");
//         break;
//     default: // für alle nicht bezeichneten Fälle ... WICHTIG !!!!
//         console.log(firstName + " macht etwas anderes!");
//         break;
// }

/********  Fallunterscheidung / CASE|SWITCH 2 *******/

const a = 100;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;    
    case (a == 2):
        console.log("a ist 2");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;
}
© 2021 GitHub, Inc.
