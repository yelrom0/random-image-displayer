/*
-------------------
- Package Loading -
-------------------
*/
// load express
const express = require('express');
const app = express();

// load node's filesystem read/write module
const fs = require('fs');

/*
-------------------
- Local Constants -
-------------------

port: the port to listen on
folder: path to the folder containing the images (using relative path)
*/

const port = 8080;
const imageFolder = './pics';

// helper function to get and return a random image from the folder
function getRandomImagePath(){
    // get the list of files in the folder using fs
    const images = fs.readdirSync(imageFolder).sort();

    // get a random number between 1 and the number of images in the folder
    // have to add 1 to the number of images because the index starts at 0
    const randomIndex = Math.floor(Math.random() * images.length);

    // return the path to the image
    return(`${imageFolder}/${images[randomIndex]}`)
}

// write the endpoint for the base path
app.get("/", (req, res) => {

    imagePath = getRandomImagePath();

    res.setHeader("Content-Type", "image/jpeg");
    res.status(200);
    //res.send(`<img src="${imagePath}"></img>`);
    res.sendFile(imagePath, {root: __dirname});
});

// this sets the app to listen on the dedicated port
app.listen(port, () => {
    console.log(`404 app is running on port ${port}`);

});