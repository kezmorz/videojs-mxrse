const generate = require('videojs-generate-postcss-config');

module.exports = function(context) {
  const options = {
    input: 'src/css/plugin.css'
  };
  const result = generate(context, options);

  return result;
};
