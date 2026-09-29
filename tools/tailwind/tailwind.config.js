const path = require('path');
const t = require('./tw-theme.js');
module.exports = { content: [path.join(__dirname, '../../site/index.html')], theme: t.theme };
