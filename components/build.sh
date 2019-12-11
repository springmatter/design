rm -rf dist/
mkdir dist
cp -r src/* dist/
yarn tailwind build src/styles.css -o dist/styles.css
