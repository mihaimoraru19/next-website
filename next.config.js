const withSass = require('@zeit/next-sass');
const nextImages = require('next-images');
const compose = require('next-compose');



module.exports = compose([
    [withSass, {
        cssModules: false
    }],
    [nextImages]
]);