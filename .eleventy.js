const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  //Add CSS and JS support
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  //Update CSS and JS changes
  eleventyConfig.addWatchTarget('./src/css');
  eleventyConfig.addWatchTarget('./src/js');

  eleventyConfig.addFilter('postDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
