const fs = require('fs-extra')

// Rough method to clean out the dist folder...
// fs.remove('dist')
// .then(() => {
//   console.log('success!')
// })
// .catch(err => {
//   console.error(err)
// })

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images")
    eleventyConfig.addPassthroughCopy("src/admin")

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
}