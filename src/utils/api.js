const apiLocalUrl = "http://localhost:8080/";
const apiServerUrl = "https://respected-berry-scaffold.glitch.me/";

export async function getData(param) {
  const response = await fetch(apiLocalUrl + param);

  return response.json();
}
