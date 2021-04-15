const fs = require('fs-extra')



module.exports = function (eleventyConfig) {

    // Rough method to clean out the dist folder...
    // fs.remove('dist')
    // .then(() => {
    // console.log('success!')
    // })
    // .catch(err => {
    // console.error(err)
    // })

    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")

    return {
        dir: {
            // input: "src",
            output: "dist"
        }
    };
}