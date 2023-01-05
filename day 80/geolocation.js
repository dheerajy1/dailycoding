export function getGeoInfo() {
  return axios.get("Major cities in India.json").then((response) => {
    const data = response.data;
    const geoObj = data[Math.round(Math.random() * (data.length - 1))];
    geoObj.country = "India";
    return geoObj;
  });
}
