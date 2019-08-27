rm -rf dist/
mkdir dist
cp -r src/* dist/
npx tailwind build src/styles.css -o dist/styles.css
