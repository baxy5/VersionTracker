import fetch from "node-fetch";
import cheerio from "cheerio";

const getRawData = (URL) => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
};

const nodejs_lts_url = "https://nodejs.org/en/download/";
const nodejs_latest_url = "https://nodejs.org/en/download/releases/";
const strapi_url = "https://strapi.io/changelog";
const nextjs_url = "https://nextjs.org/blog";


// NodeJs LTS version
const getNodeLtsVersion = async () => {
  const data = await getRawData(nodejs_lts_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("strong")[0].children[0].data
  console.log(version)
};

getNodeLtsVersion();
