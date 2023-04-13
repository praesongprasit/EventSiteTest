const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const { minify } = require("terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (config) {
  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/favicon.ico");
  config.addPassthroughCopy("src/apple-touch-icon.png");
  config.addPassthroughCopy("src/manifest.json");
  config.addPassthroughCopy("src/fonts");

  config.addPlugin(pluginSyntaxHighlight);;
  config.addPlugin(pluginNavigation);
  config.addPlugin(inclusiveLangPlugin);
  config.addPlugin(pluginRss);

  config.setServerOptions({
    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,
  });

  config.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  //  https://github.com/11ty/eleventy/issues/580
  config.addNunjucksFilter("absoluteUrl", (href, base) => {
    let { URL } = require("url");
    return (new URL(href, base)).toString()
  })

  // https://moment.github.io/luxon/#/formatting
  https://github.com/moment/luxon/blob/master/docs/formatting.md#the-basics
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");
  });

  config.addFilter("readableYear", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  config.addCollection("speakers", collection => {
    return collection.getFilteredByTag("speaker");
  });

  config.addCollection("team", collection => {
    return collection.getFilteredByTag("team").sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    passthroughFileCopy: true,
    templateFormats: ["css", "html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
