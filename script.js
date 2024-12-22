function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;
    console.log("Fetching weather for:", city);
  
    fetch(apiUrl)
      .then(response => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then(data => {
        console.log("Weather data received:", data);
  
        if (data.cod === 200) {
          displayWeather(data);
        } else {
          alert(`Error: ${data.message || "City not found"}`);
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        alert("An unexpected error occurred. Please try again later.");
      });
  }  
const city = document.getElementById('city-input').value.trim();
console.log("City entered:", city);

if (!city) {
  alert("Please enter a valid city name.");
  return;
}
function displayWeather(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
  
    locationElement.innerHTML = `Location: ${data.name}`;
    temperatureElement.innerHTML = `Temperature: ${data.main.temp}°C`;
    conditionElement.innerHTML = `Condition: ${data.weather[0].description}`;
  }
  