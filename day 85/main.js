axios
  .get("data.xml")
  .then((response) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, "text/xml");
    extractLinks(xmlDoc);
  })
  .catch((error) => {
    console.error(error);
  });

function extractLinks(data) {
  const links = Array.from(data.querySelectorAll("link")).map(
    (link) => link.textContent
  );

  console.log(links);
}
