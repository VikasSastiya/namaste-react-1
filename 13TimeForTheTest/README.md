# Type of testing (developer)
- manual testing
- Unit Testing
- Integration Testing
- End to End Testing - e2e testingtestingtesting


# Just search react testing library
- https://testing-library.com/docs/react-testing-library/intro/

- DOM/react testing library uses jest4 behind the seen
- https://jestjs.io/

- so we need both react testing library and jest to test our code
 - install react testing library by npm i -D @testing-library/react
 - install jest by npm i -D jest

 - npm install --save-dev babel-jest @babel/core @babel/preset-env    
    this is available in jest website

 # Setting up Testing in our app
  - Install React Testing Library
  - Installed jest
  - Installed Babel dependencies
  - Configure Babel by creating bable.config.js file 
       module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
  - Configure Parcel Config file to disable default bable transpilation   by creating .parcelrc file  
     and paste this code
        {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}

this code are available in parcel website https://parceljs.org/languages/javascript/#babel