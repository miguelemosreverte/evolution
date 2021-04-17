yarn build
cp build/static/js/main*.js ../client/public/components.min.js
cp build/static/js/*.chunk.js ../client/public/components.min.chunk.js
cp build/static/css/main*.css ../client/public/components.min.css
