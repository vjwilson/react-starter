# React Starter

This project can serve as the basis for a React application.

Each release version of the project has increasing levels of power and complexity. (See the [Tags](#tags) section below for more information.)

## Getting Started

First, download the repo and install the dependenices:

        git clone https://github.com/vjwilson/react-starter
        cd react-starter
        npm install

To compile the code, start watching the source file, and open an auto-refresing brower tab:

        npm start

## Tags

Checkout the tag that corresponds to the level of complexity you want in your build system.

For instance,

        git checkout v0.2.1

**Be sure to re-run `npm install` after you change tags.**

### List of Versions

| Tag | Description |
| --- | ----------- |
| v0.4.1 | Fix ESLint rules |
| v0.4.0 | ESLint for JS linting |
| v0.3.0 | Require React and ReactDOM in code, instead of script includes from CDN |
| v0.2.1 | Includes ES2015 (both babel-preset and babel-polyfill) in build |
| 0.2.0 | Basic webpack build for JS |
| v0.1.0 | Babel for compiling JSX to JS _(no ES2015)_, live-server for hot reload |

## Credits

This project was inspired by [Jack Franklin](https://twitter.com/jack_franklin)'s article, [Misconceptions of Tooling in JavaScript](http://javascriptplayground.com/blog/2016/02/the-react-webpack-tooling-problem/).

I bumped the version of React to 15.3.1 for the first release of this repo.

For versioning, I am trying to follow [Semantic Versioning](http://semver.org/).
