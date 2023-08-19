function updateTime () {

let honoluluElement = document.querySelector("#honolulu");
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime = moment().tz("Pacific/Honolulu");

honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>]A[</small>]");


let denpasarElement = document.querySelector("#denpasar");
let denpasarDateElement = denpasarElement.querySelector(".date");
let denpasarTimeElement = denpasarElement.querySelector(".time");
let denpasarTime = moment().tz("Asia/Ujung_Pandang");

denpasarDateElement.innerHTML = denpasarTime.format("MMMM Do YYYY");
denpasarTimeElement.innerHTML = denpasarTime.format("h:mm:ss [<small>]A[</small>]");

let faroElement = document.querySelector("#faro");
let faroDateElement = faroElement.querySelector(".date");
let faroTimeElement = faroElement.querySelector(".time");
let faroTime = moment().tz("Portugal");

faroDateElement.innerHTML = faroTime.format("MMMM Do YYYY");
faroTimeElement.innerHTML = faroTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);