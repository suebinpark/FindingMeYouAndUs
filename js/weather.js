function weatherSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "6c60def50fed02be8d183797240fdbf4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather__card span:first-child");
      if (data.sys.country == "KR") {
        city.innerText = `You are in ${data.name}, Korea.`;
      } else {
        city.innerText = `You are not in Korea. Your current location is detected to be ${data.name}`;
      }
      // weather.innerText = `${data.weather[0].main}, ${data.weather[0].description}
      // ${data.main.temp}, ${data.main.feels_like}, ${data.main.temp_min},${data.main.temp.max}℃
      // ${data.sys.country}(=="KR"인지 체크)`;
    });
}

function weatherFail() {
  alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(weatherSuccess, weatherFail);
