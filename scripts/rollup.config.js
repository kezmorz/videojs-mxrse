const generate = require('videojs-generate-rollup-config');

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
const options = {
  input: 'src/js/plugin.js'
};
const config = generate(options);

// export the builds to rollup
export default Object.values(config.builds);
