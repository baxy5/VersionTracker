import fetch from "node-fetch"

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

const getNodeLtsVersion = async () => {
  const nodeLtsVersionRaw = await getRawData(nodejs_lts_url);
  console.log(nodeLtsVersionRaw);
};

getNodeLtsVersion();
