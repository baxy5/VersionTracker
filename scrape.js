const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cheerio = require("cheerio");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
  console.log("NodeJS(LTS) version scrapped.");

  await prisma.technology.create({
    data: {
      name: "NodeJS(LTS)",
      version: version,
      link: nodejs_lts_url,
    },
  });
};

// NodeJs Latest
const getNodeLatestVersion = async () => {
  const data = await getRawData(nodejs_latest_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("strong")[0].children[0].data;
  console.log("NodeJS(Latest) version scrapped.");

  await prisma.technology.create({
    data: {
      name: "NodeJS(Latest)",
      version: version,
      link: nodejs_latest_url,
    },
  });
};

// Strapi
const getStrapiVersion = async () => {
  const data = await getRawData(strapi_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("h3")[0].children[0].data;
  const versionSplitted = version.split(" ");
  console.log("Strapi version scrapped.");

  await prisma.technology.create({
    data: {
      name: "Strapi",
      version: versionSplitted[1],
      link: "https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project",
    },
  });
};

// NextJs
const getNextjsVersion = async () => {
  const data = await getRawData(nextjs_url);

  const parsedData = cheerio.load(data);

  const version = parsedData("h3")[1].children[0].children[0].data;
  const link = parsedData("h3")[1].children[0].attribs.href;
  const versionSplitted = version.split(" ");

  console.log("NextJS version scrapped.");

  await prisma.technology.create({
    data: {
      name: "NextJS",
      version: versionSplitted[1],
      link: `https://nextjs.org${link}`,
    },
  });
};

getNodeLtsVersion();
getNodeLatestVersion();
getStrapiVersion();
getNextjsVersion();
