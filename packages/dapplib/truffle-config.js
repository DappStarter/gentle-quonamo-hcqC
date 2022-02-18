require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stick universe gesture hidden slot genre'; 
let testAccounts = [
"0x8ebaecd43b6b67f992b5d09e6b91d53e399605b8a2137e98d8c5568dddf8bd3c",
"0x50a7de8f2100f8017f02ae4d18498f6a1b7eaee0c558ff56aee06304f8614e88",
"0x856bf908f01409044a1d1e5fcc53c7b9bda9d2c4d05a34c4a4f5d6aa60f75511",
"0xf9989e758cc68a8882dcc4e0eb7b5b37a00b9a3b17e96c0b79ca4fd75f7cb7c3",
"0x2a92f2f328c460489e905c93e2aae250d827567b50d0b9af3ee5bed3a4c6835f",
"0x65f9ed2a689e7a094a6b8c0faabb9a8f29b46c472a99952b8a148b94f091d965",
"0xfc6cb72c2141477604f6ebc35c425e0a11b1723d7c8a76da483d6f7cbb717214",
"0x0b71dfd2e53ad4a580dbc2ccdf49feeed68bcf9f871b461295f1926ce1d6dd0e",
"0x59a8632a6a36691de33566ca190718c08209234de550f47d6f8e52691227f823",
"0x79a85c42bcf47af4158626f0ecd17d9014156977401283d8cc7d7c8b81f6f0d0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

