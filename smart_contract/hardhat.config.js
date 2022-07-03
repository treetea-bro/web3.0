// https://eth-goerli.g.alchemy.com/v2/ASO-zLLd-gX1GXA6PuojwMsj-n-_D346

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ASO-zLLd-gX1GXA6PuojwMsj-n-_D346",
      accounts: [
        "021117ef47492b7ce3bc53731d78d174b3e96fa2c9a4c51b70711656507017db",
      ],
    },
  },
};
