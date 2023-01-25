const CleanCSS = require("clean-css");
const fs = require("fs");
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

  // Display 404 page in BrowserSnyc
  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
        const content_404 = fs.readFileSync("dist/404.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
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
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd MMMM yyyy");
  });

  config.addFilter("readableYear", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
  });

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
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
