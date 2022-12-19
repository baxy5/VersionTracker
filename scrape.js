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
const nodejs_latest_url = "https://nodejs.org/en/download/current/";
const strapi_url = "https://strapi.io/changelog";
const nextjs_url = "https://nextjs.org/blog";

// NodeJs LTS
const getNodeLtsVersion = async () => {
  const data = await getRawData(nodejs_lts_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("strong")[0].children[0].data;
  console.log(version);
};

// NodeJs Latest
const getNodeLatestVersion = async () => {
  const data = await getRawData(nodejs_latest_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("strong")[0].children[0].data;
  console.log(version);
};

// Strapi
const getStrapiVersion = async () => {
  const data = await getRawData(strapi_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("h3")[0].children[0].data;
  const versionSplitted = version.split(" ");
  console.log(versionSplitted[1]);
};

// NextJs
const getNextjsVersion = async () => {
  const data = await getRawData(nextjs_url);

  const parsedData = cheerio.load(data);

  // TODO: Extract data from this h3, the version already found
  const version = parsedData("h3")[1].children[0];
  console.log(version);
};

getNodeLtsVersion();
getNodeLatestVersion();
getStrapiVersion();
getNextjsVersion();
