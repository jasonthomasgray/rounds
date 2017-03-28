# rounds

This is a project to allow you to build a list of drinks before going to the bar so that you don't forget

## Code Style
All code should aim to follow [this style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

## Directory structure
All first party code should be in the src folder.

`src/components` contains services, directives and filters, registered to the angular module `rounds.components`
`src/modules` contains views, controllers and routes, registered to the angular module `rounds.modules` and `rounds.routing`

Each folder within these two folders should be fairly self contained help picking components out for other projects

## Building
Project is built with gulp.
### Prerequisites
You need [Node.js](nodejs.org), [bower.js](bower.io) and [gulp.js](gulpjs.com) to build. It's also helpful to have [karma-cli](https://www.npmjs.com/package/karma-cli) to run the tests
### Initial setup
1. run `npm install`
2. run `bower install`
3. run `gulp`
This will put files into the folder `dist` this can then be served up by some plain old http server.

## Unit tests
Tests are written in jasmine. Test files should sit in the same directory as what is being tested and should have the same name except eith `.spec.js` at the end (eg. `/components/api/api.service.js` will have a test file `/components/api/api.service.spec.js`). This keeps everything together and means tests get moved along with other files.

## Styles
Styles are written in Sass
Styles should try to conform to [BEM](getbem.com)
