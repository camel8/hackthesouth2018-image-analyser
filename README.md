# Hack the South 2018 - Image Analyser

This is a small experiment project for Hack the South 2018 hackathon that
provides a simple text detection from image feature by using Google Cloud 
Vision API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you have to get a development env running

Node.JS is needed in order to run the project, the following instructions 
assumed you have Node.JS installed on your machine.

```
npm install
```

Before executing the project, you must set up the authentication for the Vision 
API Client library first, the [instructions](https://cloud.google.com/vision/docs/libraries#setting_up_authentication) on 
Google will guide you through the process. 

Then, place the JSON file for the API key you just got from Google to the root 
folder, and replace the file name in `routes/index.js`.

```javascript
routes/index.js

const client = new vision.ImageAnnotatorClient({
  keyFilename: path.join(__dirname, '../<file name of your API key>'),
});
```

Once the API has been set up properly, you can then execute the project by 
using the command `node app.js`.

## License

This project is licensed under the MIT License - see the 
[LICENSE.md](LICENSE.md) file for details.
