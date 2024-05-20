// const apiUrl = "http://localhost:8080/";
const apiUrl = "https://respected-berry-scaffold.glitch.me/";

// Get data from api
export async function getData(param) {
  const response = await fetch(apiUrl + param);

  return response.json();
}

// Get spots availability
export async function getAvailableSpots() {
  const response = await fetch(apiUrl + "available-spots");

  return response.json();
}

// Reserve spot
export async function reserveSpot() {
  const headersList = {
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    // has to be changed
    area: "Alfheim",
    amount: 2,
  });

  const response = await fetch(apiUrl + "reserve-spot", {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  return response.json();
}

// Fullfill resevation
export async function fullfillResavation() {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    // has to be changed
    id: "1gh8moicolw6he541",
  });

  let response = await fetch(apiUrl + "fullfill-reservation", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  return response.json();
}
