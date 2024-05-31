// const apiUrl = "http://localhost:8080/";
const apiUrl = "https://respected-berry-scaffold.glitch.me/";

// Get data from api
export async function getData(param) {
  const response = await fetch(apiUrl + param);

  const data = await response.json();
  return data;
}

// Get data from api
export async function getBands(param) {
  const response = await fetch(apiUrl + "bands/" + param);

  const data = await response.json();
  return data;
}

// Get spots availability
export async function getAvailableSpots() {
  const response = await fetch(apiUrl + "available-spots");

  return response.json();
}

// Reserve spot
export async function reserveSpot(spot, tickets) {
  const headersList = {
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    area: spot,
    amount: tickets,
  });

  const response = await fetch(apiUrl + "reserve-spot", {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();
  return data.id;
}

// Fullfill resevation
export async function fullfillResavation(props) {
  let headersList = {
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    id: props,
  });

  let response = await fetch(apiUrl + "fullfill-reservation", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();
  return data;
}
