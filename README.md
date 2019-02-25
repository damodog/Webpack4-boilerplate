# Webpack boilerplate

## Summary
Bit of a playground to try to create a boilerplate using Webpack and pug as the template engine.
Npm tasks are:

`npm start` - Watch task for compiling sass, js (using Babel) and firing up local server.

`npm run build` - Build task which minifies css and js and added cache busting hash ID to file names

## Notes on creation
* This uses 3 files to cover common config, dev and prod specific configs as per the Webpack guide docs.
* css and js is extracted and injected into the index.html as `<link>` and `<script>` tags using the HtmlWebpackPlugin
* sass support is added
* A content hash id is added to css and js file names for cache busting
* css and js are minified on running `npm run build`
* splitChunks is added to split out any libraries imported and used in more than one place. https://webpack.js.org/plugins/split-chunks-plugin/
* Folder structure for sass is based on https://sass-guidelin.es/#architecture
* jQuery is currently added but can be removed if native js is prefered

## To do
* Add promises polyfill.


NB. A basic off canvas navigation has been added too.
A mobile specific nav is present but this should be changed so all nav links are using the same include file.