const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key :"d66d141641c711f56fe242cc13e275c7"
}
const input = document.querySelector("#input");
input.addEventListener("keydown", enter) ;

function enter(e){
    if (e.keyCode ===13) {
        getInfo(input.value);
    }
}
async  function getInfo(data){
    const res = await fetch ( `${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
   const result = await res.json();
   displayResult(result);
   }
  
   function displayResult(result) {
    console.log(result);
let city = document.querySelector("#city");
city.textContent=`${result.name}, ${result.sys.country}`;

getOurDate();
   
let temperature = document.querySelector("#temperature");
temperature.innerHTML =`${Math.round(result.main.temp)} <span>°</span>`;

let feelslike = document.querySelector("#feelslike");
feelslike.innerHTML ="Siente como:" + `${Math.round(result.main.feels_like)} <span>°</span>`;

let conditions = document.querySelector("#conditions");
conditions.textContent=`${result.weather[0].main}`;

let variation = document.querySelector("#variation");
variation.innerHTML = "Min:" + `${Math.round(result.main.temp_min)} <span>°</span> Max: ${Math.round(result.main.temp_max)} <span>°</span>`;
}

function getOurDate(){
const myDate = new Date ();
const days=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octobre","Noviembre","Diciembre"];
let date =days [myDate.getDay()];
let todayDate = myDate.getDate();
let month = months[myDate.getMonth()];
let year = myDate.getFullYear();
let showDate = document.querySelector("#date");
showDate.textContent=`${date}`+ " " + `${todayDate}` +" " + `${month}` +" "+ `${year}`;
}
 




