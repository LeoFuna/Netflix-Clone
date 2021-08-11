const apiKey = "&api_key=713f66b7fba17f55a8023d610b83cb50";
const baseUrl = "https://api.themoviedb.org/3";

async function fetchAPI(typeRequest) {
  try {
    const response = await fetch(`${baseUrl}${typeRequest}&language=pt-BR${apiKey}`);
    const responseJson = await response.json();
    return responseJson
  } catch (error) {
    console.error(error);
  }
}

export {
  fetchAPI,
};
