//*/
let job = "Manager";
let salary = 0;
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
}
console.log(salary);
//*/
let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}

//*/
// Task 1
// //print the data in userArray
// //#note stop at cairo and skip phone number
let userArray = ['ahmed', 30, 'phoneNumber', true, 'cairo', false];

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] === 'phoneNumber')
    {
        continue; // Skip 'phoneNumber'
    }
    if (userArray[i] === 'cairo')
    {
        console.log(userArray[i]);
        break;
    }
    console.log(userArray[i]);
}


// //___________________________________________//
// Task #2


var friends = ['ali', 2, 'ahmed', 3, 5, 'sara'];
var names = [];
for (let i = 0,j = 0; i < friends.length; i++) {
    if (typeof friends[i] === 'string')
    {
        names[j]=friends[i];
        j++
    }
}

console.log(names);
// /************ */

var friends=['Ahmed',"Sayed","Eman","Mahmoud","Ameer","Osama","Sameh"]
let letter='a'
let c=1
for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(letter)) 
    {
            console.log(`${c}=>${friends[i]}`);
            c++
    }
}
//1=>Sayed
//2=>Eman
//3=>Mahmoud
//4=>Osama
//5=>Sameh