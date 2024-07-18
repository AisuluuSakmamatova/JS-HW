// Задача 1

let userName = 10;
if(userName === 10){
    console.log("верно");
}else {
    console.log("не верно");
};

// задача 2

const batirNum = prompt ("Введите номер квартиры");
if(batirNum >= 1 && batirNum <=20) {
    console.log("находится в 1-м подъезде");
} else if(batirNum >= 21 && batirNum <= 48){
    console.log("находится в 2-м подъезде");
} else if(batirNum >= 49 && batirNum <= 90){
    console.log("находится в 3-м подъезде");
}else {
    console.log("нет такой квартиры");
};

//задача 3
let a = 3; 
if(a > 0 && a < 5){
    console.log('Верно');
}else {
    console.log('Не верно');
};

//задача 4

const hour = prompt("времени суток")

if(hour >= 6 && hour <= 12){
    console.log('Доброе утро!');
} else if( hour >= 13 && hour <= 17){
    console.log('Добрый день!');
}else{
    console.log('Добрый вечер!');
};

// задача 5

const userNames = prompt("Nooruz")

if( userNames >= 6 &&  userNames <= 12){
    console.log('Доброе утро Nooruz!');
} else if(  userNames >= 13 && userNames<= 17){
    console.log('Добрый день Nooruz!');
}else{
    console.log('Добрый вечер Nooruz!');
};

// задача 6

let visitorAge = "возраст";
if(visitorAge < 6 || visitorAge >= 65){
    console.log("скидка");
} else{
    console.log("без скидки");
};

// задача 7

const firstUser = prompt("USER 1 ");
const secontUser =prompt("User 2");

if(firstUser === "KAMEN" && secontUser === "KAMEN"){
    console.log("NICHYA");
} else if(firstUser === "KAMEN" && secontUser === "NOJNISA"){
    console.log("USER 1 WIN");
} else if (firstUser === "KAMEN" && secontUser === "BUMAGA"){
    console.log("USER 2 WIN");
} else if(firstUser === "NOJNISA" && secontUser ===  "BUMAGA"){
    console.log("USER 1 WIN");
}else if(firstUser === "NOJNISA" && secontUser === "KAMEN"){
console.log("USER 2 WIN");
}else if(firstUser === "NOJNISA" && secontUser === "NOJNISA"){
    console.log("NICHYA");
}else{
    console.log("TY TOCHO V IGRE");
};

