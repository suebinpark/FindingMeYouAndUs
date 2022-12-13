const locatedCity = document.querySelector(".weather__card-city");
const locatedDetails = document.querySelector(".weather__card-details");
const locatedDetailsMain = document.querySelector(
  ".weather__card-details--main"
);
const locatedDetailsTemp1 = document.querySelector(
  ".weather__temp-text:nth-child(1)>span"
);
const locatedDetailsTemp2 = document.querySelector(
  ".weather__temp-text:nth-child(2)>span"
);

function weatherSuccess(position) {
  const API_KEY = "6c60def50fed02be8d183797240fdbf4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.sys.country == "KR") {
        let userName = sessionStorage.getItem("username");
        let planetName;
        if (sessionStorage.getItem("planetName") != null) {
          planetName = sessionStorage.getItem("planetName");
        } else {
          planetName = "";
        }
        if (userName != null) {
          locatedCity.innerText = `\n✷\nWow, ${userName}!
          Did you name this planet ≪${planetName}≫? What a nice name! Remember: In order to change or rename the planet, simply click on it and save. But it's better to follow your instincts. There may be a reason why you picked it at first glance.
          \nHere we talk about the world on which we are standing. We forget the space we live in too easily.
          But isn't it important to me, you, and us? For me, 'home' is one of the most significant place in my life. At the same time, I feel we need to think about the definition of 'home'.
          \n✷\nSo here are some questions...
          Where is your home? How come did it become your home? Why do you call it 'home'? What makes the difference between 'home' and 'non-home'? If there is a unique/noticeable characteristic of a space that is called home, does your home display that characteristic? Can you feel it at home? If not, how do you feel about that? Can you truly say "Home Sweet Home" as you arrive home?
          What makes a home a good home?
          \n✷\nSo... let me see. It seems that you are now in ${data.name}, South Korea. Do you feel safe now? Or are you feeling insecure in your current position?
          Space has a great impact on our emotions - whether it's a good thing or a bad thing!(To be honest, I wonder... if there's truly 'good' or 'bad' emotion.)
          And that's why I wish you can take a careful look at where we are and how we feel.`;
        } else {
          locatedCity.innerText = `\n✷\nWow\! Did you name this planet ≪${planetName}≫?
          What a nice name! Remember: In order to change or rename the planet, simply click on it and save. But it's better to follow your instincts. There may be a reason why you picked it at first glance.
          \nHere we talk about the world on which we are standing. We forget the space we live in too easily.
          But isn't it important to me, you, and us? For me, 'home' is one of the most significant place in my life. At the same time, I feel we need to think about the definition of 'home'.
          \n✷\nSo here are some questions...
          Where is your home? How come did it become your home? Why do you call it 'home'? What makes the difference between 'home' and 'non-home'? If there is a unique/noticeable characteristic of a space that is called home, does your home display that characteristic? Can you feel it at home? If not, how do you feel about that? Can you truly say "Home Sweet Home" as you arrive home?
          What makes a home a good home?
          \n✷\nSo... let me see. It seems that you are now in ${data.name}, South Korea. Do you feel safe now? Or are you feeling insecure in your current position?
          Space has a great impact on our emotions - whether it's a good thing or a bad thing!(To be honest, I wonder... if there's truly 'good' or 'bad' emotion.)
          And that's why I wish you can take a careful look at where we are and how we feel.`;
        }
      } else {
        if (userName != null) {
          locatedCity.innerText = `\n✷\nWow, ${userName}!
          Did you name this planet ≪${planetName}≫? What a nice name! Remember: In order to change or rename the planet, simply click on it and save. But it's better to follow your instincts. There may be a reason why you picked it at first glance.
          \nHere we talk about the world on which we are standing. We forget the space we live in too easily.
          But isn't it important to me, you, and us? For me, 'home' is one of the most significant place in my life. At the same time, I feel we need to think about the definition of 'home'.
          \n✷\nSo here are some questions...
          Where is your home? How come did it become your home? Why do you call it 'home'? What makes the difference between 'home' and 'non-home'? If there is a unique/noticeable characteristic of a space that is called home, does your home display that characteristic? Can you feel it at home? If not, how do you feel about that? Can you truly say "Home Sweet Home" as you arrive home?
          What makes a home a good home?
          \n✷\nSo... let me see. It seems that you are now in ${data.name}. I don't think you're in Korea. Do you feel safe now? Or are you feeling insecure in your current position?
          Space has a great impact on our emotions - whether it's a good thing or a bad thing!(To be honest, I wonder... if there's truly 'good' or 'bad' emotion.)
          And that's why I wish you can take a careful look at where we are and how we feel.`;
        } else {
          locatedCity.innerText = `\n✷\nWow\! Did you name this planet ≪${planetName}≫?
          What a nice name! Remember: In order to change or rename the planet, simply click on it and save. But it's better to follow your instincts. There may be a reason why you picked it at first glance.
          \nHere we talk about the world on which we are standing. We forget the space we live in too easily.
          But isn't it important to me, you, and us? For me, 'home' is one of the most significant place in my life. At the same time, I feel we need to think about the definition of 'home'.
          \n✷\nSo here are some questions...
          Where is your home? How come did it become your home? Why do you call it 'home'? What makes the difference between 'home' and 'non-home'? If there is a unique/noticeable characteristic of a space that is called home, does your home display that characteristic? Can you feel it at home? If not, how do you feel about that? Can you truly say "Home Sweet Home" as you arrive home?
          What makes a home a good home?
          \n✷\nSo... let me see. It seems that you are now in ${data.name}. I don't think you're in Korea. Do you feel safe now? Or are you feeling insecure in your current position?
          Space has a great impact on our emotions - whether it's a good thing or a bad thing!(To be honest, I wonder... if there's truly 'good' or 'bad' emotion.)
          And that's why I wish you can take a careful look at where we are and how we feel.`;
        }
      }
      locatedDetailsMain.innerText = `${data.weather[0].main}`;
      locatedDetailsTemp1.innerText = `${data.main.temp}`;
      locatedDetailsTemp2.innerText = `${data.main.feels_like}`;
    });
}

function weatherFail() {
  alert("Where are you? I cannot find your location.");
}
navigator.geolocation.getCurrentPosition(weatherSuccess, weatherFail);
