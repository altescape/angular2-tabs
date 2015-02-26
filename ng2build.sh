# local deps
npm i

# transpile angular2
cd node_modules/angular2
npm i
cd es6/prod
node es5build.js -d ../../../angular2-es5
cd ../..

# transpile runtime type assertions
cd node_modules/rtts_assert
npm i
cd es6
node es5build.js -d ../../rtts_assert-es5
cd ../..
