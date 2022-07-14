require("dotenv").config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Pukka Polo Players Club";
const description = "Pukka Polo Players Club";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "PPSC",
  seller_fee_basis_points: 700, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.pukkapolo.com/",
  creators: [
    {
      address: "0x73203F31C1dE812EB42171F5d2C7a27de822fa6c",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    // White Men - No hats
    growEditionSizeTo: 187, //187
    layersOrder: [
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/White/No Hats", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Handicap" },
    ],
  },
  {
    // White Men -  with hats
    growEditionSizeTo: 374, //374
    layersOrder: [
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/White/Hats", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
    ],
  },
  {
    // White Men with beret
    growEditionSizeTo: 415, //415
    layersOrder: [
      { name: "Handicap" },
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/White/Hats", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
    ],
  },
  {
    // Black Men - No hats
    growEditionSizeTo: 481, //481
    layersOrder: [
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Black/No hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Handicap" },
    ],
  },
  {
    // Black Men - with hats
    growEditionSizeTo: 547, //547
    layersOrder: [
      { name: "Handicap" },
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Black/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
      { name: "Handicap" },
    ],
  },
  {
    // Black with beret
    growEditionSizeTo: 561, //561
    layersOrder: [
      { name: "Handicap" },
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Black/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
    ],
  },
  {
    // Brown Men - No hats
    growEditionSizeTo: 643, //643
    layersOrder: [
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Brown/No hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Handicap" },
    ],
  },
  {
    // Brown Men - with hats
    growEditionSizeTo: 725, //725
    layersOrder: [
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Brown/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
      { name: "Handicap" },
    ],
  },
  {
    // Brown Men - with Beret
    growEditionSizeTo: 743, //743
    layersOrder: [
      { name: "Handicap" },
      { name: "Shirts" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Brown/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Men",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
      { name: "Handicap" },
    ],
  },
  {
    // White Lady No hats
    growEditionSizeTo: 812, //812
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/White/No Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
    ],
  },
  {
    // White Lady with hats
    growEditionSizeTo: 881, //881
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/White/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
    ],
  },
  {
    // White Lady with beret
    growEditionSizeTo: 896, //896
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/White/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/White/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
    ],
  },
  {
    // Black Lady No hats
    growEditionSizeTo: 917, //917
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Black/No Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
    ],
  },
  {
    // Black Lady with hats
    growEditionSizeTo: 938, //938
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Black/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
    ],
  },
  {
    // Black Lady with beret
    growEditionSizeTo: 942, //942
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Black/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Black/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
    ],
  },
  {
    // Brown Lady No hat
    growEditionSizeTo: 954, //954
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Brown/No Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
    ],
  },
  {
    // Brown Lady with hats
    growEditionSizeTo: 966, //966
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Brown/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      {
        name: "Headwear/Baseball Cap/Base",
        options: { displayName: "Baseball cap colour" },
      },
      {
        name: "Headwear/Baseball Cap/Brim",
        options: { displayName: "Baseball cap brim colour" },
      },
      {
        name: "Headwear/Baseball Cap/Branding",
        options: { displayName: "Baseball cap colour" },
      },
    ],
  },
  {
    // Brown Lady with beret
    growEditionSizeTo: 968, //968
    layersOrder: [
      { name: "Shirts" },
      { name: "Handicap" },
      { name: "Jeans" },
      { name: "Boots" },
      { name: "Kneepads" },
      { name: "Player/Lady/Brown/Hat", options: { displayName: "Player" } },
      { name: "Stick" },
      { name: "Whip" },
      { name: "Cap" },
      { name: "Cap peak" },
      {
        name: "Arms/Brown/Ladies",
        options: { displayName: "Status", bypassDNA: true },
      },
      { name: "Gloves" },
      { name: "Headwear/Beret", options: { displayName: "Beret colour" } },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 600,
  height: 600,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 6,
};

const background = {
  generate: true,
  brightness: "100%",
  static: true,
  default: "#FFFFFF",
};

const extraMetadata = {
  creator: "Pukka Polo Players Club",
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = "rinkeby"; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = "Pukka Polo Players Club";
const CONTRACT_SYMBOL = "PPPC";
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = "0xE01214aa7B5Fe501ADE4C34dEa4cA4c36036e4e6";
const TREASURY_ADDRESS = "0xE01214aa7B5Fe501ADE4C34dEa4cA4c36036e4e6";
const MAX_SUPPLY = 1000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.0; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 4; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 750; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xE01214aa7B5Fe501ADE4C34dEa4cA4c36036e4e6"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "How will you pick your team?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE =
  "https://ipfs.io/ipfs/bafkreicd73qkrufwsg2xb6mzmilvtdxevbmo2a7cga2pvxyqi3hjqjjbai"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1;

const preview = {
  thumbPerRow: 50,
  thumbWidth: 100,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: 0,
  quality: 500,
  delay: 400,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES,
};
