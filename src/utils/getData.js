const url = "https://swapi.dev/api/films";

const data = fetch(url);

// console.log(data);

export async function getData() {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}
