const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cheerio = require("cheerio");

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

// NextJs
const getNextjsVersion = async () => {
  const data = await getRawData(nextjs_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("h3")[1].children[0].children[0].data;
  const link = parsedData("h3")[1].children[0].attribs.href;
  const versionSplitted = version.split(" ");
  console.log(versionSplitted[1]);
  console.log(`https://nextjs.org${link}`);
};

getNextjsVersion();
