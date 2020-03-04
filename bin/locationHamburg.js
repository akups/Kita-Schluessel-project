// var places = algoliasearch.initPlaces(
//   "plN1AB5OA28Y",
//   "b0e8c068545276c7792e336612ca052a"
// );
// places.search("20097 Hamburg, Friesenstraße 13", function(err, res) {
//   if (err) {
//     throw err;
//   }
//   console.log(res);
// });

const axios = require("axios");
const fs = require("fs");

const kitas = require("./data.json");

const promises = kitas.slice(30, 60).map(kita =>
  axios.post("https://places-dsn.algolia.net/1/places/query", {
    query: kita.kita_address
  })
);

Promise.all(promises).then(results => {
  results.forEach((result, i) => {
    const suburb = result.data.hits && result.data.hits[0].suburb[0];
    if (!suburb) console.log(kitas[i].kita_address);
    kitas[i].kita_suburb = suburb;
  });
  fs.writeFileSync("./data.json", JSON.stringify(kitas));
  // write file
});
