document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        let honoluluElement = document.querySelector("#honolulu");
        if (honoluluElement) {
        let honoluluDateElement = honoluluElement.querySelector(".date");
        let honoluluTimeElement = honoluluElement.querySelector(".time");
        let honoluluTime = moment().tz("Pacific/Honolulu");

        honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
        honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>]A[</small>]");

        let denpasarElement = document.querySelector("#denpasar");
        if (denpasarElement) {
        let denpasarDateElement = denpasarElement.querySelector(".date");
        let denpasarTimeElement = denpasarElement.querySelector(".time");
        let denpasarTime = moment().tz("Asia/Ujung_Pandang");

        denpasarDateElement.innerHTML = denpasarTime.format("MMMM Do YYYY");
        denpasarTimeElement.innerHTML = denpasarTime.format("h:mm:ss [<small>]A[</small>]");

        let faroElement = document.querySelector("#faro");
        if (faroElement) {
        let faroDateElement = faroElement.querySelector(".date");
        let faroTimeElement = faroElement.querySelector(".time");
        let faroTime = moment().tz("Europe/Lisbon");

        faroDateElement.innerHTML = faroTime.format("MMMM Do YYYY");
        faroTimeElement.innerHTML = faroTime.format("h:mm:ss [<small>]A[</small>]");
    }
    } } }

    function updateCity(event) {
        let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
            <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);

});
