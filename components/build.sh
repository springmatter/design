rm -rf dist/
mkdir dist
cp -r src/* dist/
cp tailwind.config.js dist/ 
npx tailwind build src/styles.css -o dist/styles.css
