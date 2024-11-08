alert("Hello Visitor");
function getInputValue() {
  const inputValue = document.querySelector(".input-city-name").value;
  console.log(inputValue);
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=543974d8866f45c48a3183737242910&q=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
