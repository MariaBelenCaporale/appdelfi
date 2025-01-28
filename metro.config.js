// const { getDefaultConfig } = require('expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   resolver: {
//     assetExts: [...defaultConfig.resolver.assetExts, 'ttf', 'otf'], 
//   },
// };
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts = [...config.resolver.assetExts, 'png'];

module.exports = config;
