'use strict' 

async function getPlanetFact() {

  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "y5TJQhHVNXPu02MMlvYPGw==Qha8QKpVf2zMq8dC");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const userInput = document.getElementById('userInput').value;
  const api_endpoint = `https://api.api-ninjas.com/v1/planets?name=${userInput}`
  const response = await fetch(api_endpoint,requestOptions);
  const json_response = await response.json();

  //console.log(JSON.stringify(json_response));
  let keys = Object.keys(json_response[0]);
  let data = JSON.stringify(json_response);
  return data;
}

async function showPlanetFact() {
  const factResponse = await getPlanetFact();
  const paragraphTag = document.getElementById("fact");
  paragraphTag.textContent = factResponse;
}

async function getWeather() {

  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "y5TJQhHVNXPu02MMlvYPGw==Qha8QKpVf2zMq8dC");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const userWeather = document.getElementById('userWeather').value;
  const api_endpoint = `https://api.api-ninjas.com/v1/weather?city=${userWeather}`
  const response = await fetch(api_endpoint,requestOptions);
  const json_response = await response.json();

  console.log(JSON.stringify(json_response[0]));
  
  let data = JSON.stringify(json_response);
  return data;
}

async function showWeather() {
  const factResponse = await getWeather();
  const paragraphTag = document.getElementById("weather");
  paragraphTag.textContent = factResponse;
}
