let hybrid = {
  name : 'opel',
  fuel : 50,
  combustion_city : 8,
  combustion_road : 5,
};
let petrol = {
  name : 'seat',
  combustion_city : 4,
  combustion_road : 7,
  fuel : 30,
};
let petrolPrice = 5;
const sliderCity = document.getElementById('sliderCity');
const sliderRoad = document.getElementById('sliderRoad');
const kmCity = document.getElementById('kmCity');
const kmRoad = document.getElementById('kmRoad');
const score = document.getElementById('score');
const button = document.getElementById('button');

function setCity() {
    kmCity.value = sliderCity.value;
  };
function setRoad() {
     kmRoad.value = sliderRoad.value;
  };

function setCitySlider() {
    sliderCity.value = kmCity.value;
  };
function setRoadSlider() {
     sliderRoad.value = kmRoad.value;
  };

function checkScore() {
  let hybridCityScore = kmCity.value * hybrid.combustion_city
  let hybridRoadScore = kmRoad.value * hybrid.combustion_road
  let petrolCityScore = kmCity.value * petrol.combustion_city
  let petrolRoadScore = kmRoad.value * petrol.combustion_road
  let hybridScore = hybridCityScore + hybridRoadScore
  let petrolScore = petrolCityScore + petrolRoadScore
  console.log(hybridScore);
  console.log(petrolScore);
  }

sliderCity.addEventListener('click', setCity);
sliderRoad.addEventListener('click', setRoad);
kmCity.addEventListener('click', setCitySlider);
kmRoad.addEventListener('click', setRoadSlider);
kmCity.addEventListener('keyup', setCitySlider);
kmRoad.addEventListener('keyup', setRoadSlider);
button.addEventListener('click', checkScore);

setCity();
setRoad();
