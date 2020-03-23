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

sliderCity.addEventListener('click', setCity)
  function setCity() {
      kmCity.value = sliderCity.value;
  };

sliderRoad.addEventListener('click', setRoad);
  function setRoad() {
  	 kmRoad.value = sliderRoad.value;
  };

setCity();
setRoad();
